import Papa from 'papaparse'
import { useEffect, useState } from 'react'
import { type Show, splitShows } from '../shows'

export default function Shows() {
  const [shows, setShows] = useState<{ upcoming: Show[]; archive: Show[] }>({
    upcoming: [],
    archive: [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    const fail = () => {
      if (!active) return
      setError('Unable to load shows. Please try again later.')
      setLoading(false)
    }
    const url = import.meta.env.VITE_SHOWS_CSV_URL?.trim()

    if (!url) {
      fail()
      return
    }

    try {
      Papa.parse<Show>(url, {
        download: true,
        header: true,
        skipEmptyLines: true,
        dynamicTyping: false,
        complete: (results) => {
          if (!active) return
          const headers = results.meta.fields ?? []
          if (
            results.errors.length > 0 ||
            !['date', 'venue', 'location', 'bands'].every((header) =>
              headers.includes(header),
            )
          ) {
            fail()
            return
          }
          setShows(splitShows(results.data))
          setLoading(false)
        },
        error: fail,
      })
    } catch {
      fail()
    }

    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <h2 className="text-center text-2xl font-bold mt-5">Shows</h2>
      {[
        {
          title: 'Upcoming Shows',
          rows: shows.upcoming,
          empty: 'No upcoming shows. Check back soon!',
        },
        {
          title: 'Live Archive',
          rows: shows.archive,
          empty: 'No past shows yet.',
        },
      ].map(({ title, rows, empty }) => (
        <section key={title} className="mt-5" aria-label={title}>
          <div className="flex justify-center items-center mt-3 px-10">
            <table className="w-full max-w-5xl border text-start bg-white">
              <caption className="text-start">{title}</caption>
              <thead>
                <tr>
                  <th className="border text-start px-3">Date</th>
                  <th className="border text-start px-3">Venue</th>
                  <th className="border text-start px-3">Location</th>
                  <th className="border text-start px-3">Bands</th>
                </tr>
              </thead>
              <tbody aria-live="polite">
                {loading || error || rows.length === 0 ? (
                  <tr>
                    <td className="border px-3" colSpan={4}>
                      {loading
                        ? `Loading ${title.toLowerCase()}…`
                        : error || empty}
                    </td>
                  </tr>
                ) : (
                  rows.map((show) => (
                    <tr key={JSON.stringify(show)}>
                      <td className="border px-3">{show.date}</td>
                      <td className="border px-3">{show.venue || 'TBA'}</td>
                      <td className="border px-3">{show.location || 'TBA'}</td>
                      <td className="border px-3">{show.bands || 'TBA'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </>
  )
}
