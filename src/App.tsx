import { Route, Switch } from "wouter";
import { navigationItems } from "@/config";
import { AppFooter } from "./layout/AppFooter";
import { NavigationBar } from "./layout/NavigationBar";

const sortedNavigationItems = navigationItems.toSorted(
  (a, b) => a.sortOrder - b.sortOrder,
);

function App() {
  return (
    <main className="min-h-svh flex flex-col justify-between items-center">
      <section className="mt-10 w-full">
        <div className="flex items-center justify-center">
          <h1 className="sr-only">Janitors</h1>
          <p
            className="md:text-7xl text-6xl bg-gray-800
            font-brush font-medium uppercase tracking-widest
            px-3 rotate-1 text-soft-blue"
          >
            Janitors
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
            <h2 className="text-center text-2xl font-bold mt-5 font-brush">
              Page not found!
            </h2>
          </Route>
        </Switch>
      </section>
      <AppFooter />
    </main>
  );
}

export default App;
