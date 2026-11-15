import Papa from "papaparse";
import { useEffect, useMemo, useState } from "react";
import truck from "@/assets/truck.png";
import { splitShows } from "@/lib";
import type { Show, ShowTableConfig } from "@/types";

export default function Shows() {
  const [shows, setShows] = useState<{ upcoming: Show[]; archive: Show[] }>({
    upcoming: [],
    archive: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    const fail = () => {
      if (!active) return;
      setError("Unable to load shows. Please try again later.");
      setLoading(false);
    };
    const url = import.meta.env.VITE_SHOWS_CSV_URL?.trim();

    if (!url) {
      fail();
      return;
    }

    try {
      Papa.parse<Show>(url, {
        download: true,
        header: true,
        skipEmptyLines: true,
        dynamicTyping: false,
        complete: (results) => {
          if (!active) return;
          const headers = results.meta.fields ?? [];
          if (
            results.errors.length > 0 ||
            !["date", "venue", "location", "bands"].every((header) =>
              headers.includes(header),
            )
          ) {
            fail();
            return;
          }
          setShows(splitShows(results.data));
          setLoading(false);
        },
        error: fail,
      });
    } catch {
      fail();
    }

    return () => {
      active = false;
    };
  }, []);

  const showTableConfig = useMemo((): ShowTableConfig[] => {
    return [
      {
        title: "Upcoming Shows",
        rows: shows.upcoming,
        empty: "No upcoming shows. Check back soon!",
      },
      {
        title: "Memory Lane",
        rows: shows.archive,
        empty: "Something bad happened...",
      },
    ];
  }, [shows.archive, shows.upcoming]);

  return (
    <>
      <div className="flex items-center justify-center mt-5 px-3">
        <img
          src={truck}
          alt="cool truck"
          className="md:w-xl w-fit border border-dashed border-gray-800"
        />
      </div>
      <div className="text-center text-gray-800">
        <p className="font-brush md:text-4xl text-2xl mt-5">
          Here comes Janitors!
        </p>

        <p className="font-times uppercase font-bold text-lg mt-3 underline underline-offset-4">
          See below our past and upcoming live performances
        </p>
      </div>
      {showTableConfig.map(({ title, rows, empty }) => (
        <section key={title} className="mt-5" aria-label={title}>
          <div className="flex justify-center items-center mt-3 px-10">
            <table className="w-full max-w-5xl border border-gray-800 border-spacing-2">
              <caption className="text-start font-brush mb-1">{title}</caption>
              <thead>
                <tr className="font-typewriter uppercase bg-gray-800">
                  <th className="text-soft-blue text-start md:w-1/10 w-1/4 px-2">
                    Date
                  </th>
                  <th className="text-soft-blue text-start md:w-2/10 w-1/4 px-2">
                    Venue
                  </th>
                  <th className="text-soft-blue text-start md:w-4/10 w-1/4 px-2">
                    Bands
                  </th>
                  <th className="text-soft-blue text-start md:w-3/10 w-1/4 px-2">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody aria-live="polite" className="font-times">
                {loading || error || rows.length === 0 ? (
                  <tr>
                    <td className="border px-3 font-times" colSpan={4}>
                      {loading
                        ? `Loading ${title.toLowerCase()}...`
                        : error || empty}
                    </td>
                  </tr>
                ) : (
                  rows.map((show) => (
                    <tr key={JSON.stringify(show)}>
                      <td className="border border-gray-800 px-2">
                        {show.date}
                      </td>
                      <td className="border border-gray-800 px-2">
                        {show.venue || "TBA"}
                      </td>
                      <td className="border border-gray-800 px-2">
                        <div className="">{show.bands || "TBA"}</div>
                      </td>
                      <td className="border border-gray-800 px-2">
                        {show.location || "TBA"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </>
  );
}
