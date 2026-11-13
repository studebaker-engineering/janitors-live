import { Route, Switch } from "wouter";
import { navigationItems } from "@/config";
import { NavigationBar } from "./layout/NavigationBar";

const sortedNavigationItems = navigationItems.toSorted(
  (a, b) => a.sortOrder - b.sortOrder,
);

function App() {
  return (
    <main>
      <section className="mt-10">
        <div className="flex items-center justify-center">
          <h1 className="sr-only">Janitors</h1>
          <p
            className="md:text-7xl text-6xl 
            bg-gray-800
            border-2 border-dashed border-gray-800 
            text-soft-blue font-eurostile font-medium uppercase 
            px-3 pb-4 rotate-1"
          >
            <span className="font-brush">J</span>an
            <span className="font-times">i</span>tor
            <span className="font-sans">s</span>
          </p>
        </div>

        <NavigationBar navigationItems={sortedNavigationItems} />

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
  );
}

export default App;
