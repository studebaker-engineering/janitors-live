import { Link, Route, Switch } from 'wouter'
import { navigationItems } from '@/config'

const sortedNavigationItems = navigationItems.toSorted(
  (a, b) => a.sortOrder - b.sortOrder,
)

function App() {
  return (
    <main>
      <section className="mt-5">
        <div className="flex items-center justify-center">
          <h1 className="md:text-8xl text-6xl bg-gray-800 text-white font-eurostile font-medium uppercase px-3 pb-2 rotate-1">
            Janitors
          </h1>
        </div>

        <div className="flex justify-center items-center mt-5 px-10">
          <nav>
            <ul className="list-none list-inside flex gap-8 font-typewriter font-bold uppercase">
              {sortedNavigationItems.map((item) => (
                <li
                  key={item.link}
                  className={`bg-gray-800 text-white px-2 md:text-xl text-lg ${item.className}`}
                >
                  <Link href={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Switch>
          {sortedNavigationItems.map((item) => (
            <Route
              key={item.link}
              path={item.link}
              component={item.component}
            />
          ))}
          <Route>
            <h2 className="text-center text-2xl font-bold mt-5">
              Page not found
            </h2>
          </Route>
        </Switch>
      </section>
    </main>
  )
}

export default App
