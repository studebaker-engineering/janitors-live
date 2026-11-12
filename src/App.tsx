import { Link, Route, Switch } from 'wouter'
import About from './pages/About'
import Home from './pages/Home'
import Music from './pages/Music'
import Shows from './pages/Shows'

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
              <li className="bg-gray-800 text-white px-2 rotate-1">
                <Link href="/">Home</Link>
              </li>
              <li className="bg-gray-800 text-white px-2 -rotate-2">
                <Link href="/shows">Shows</Link>
              </li>{' '}
              <li className="bg-gray-800 text-white px-2">
                <Link href="/about">About</Link>
              </li>{' '}
              <li className="bg-gray-800 text-white px-2 rotate-1">
                <Link href="/music">Music</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/shows" component={Shows} />
          <Route path="/about" component={About} />
          <Route path="/music" component={Music} />
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
