import { Route, Switch } from "wouter";
import { navigationItems } from "@/config";
import { AppFooter } from "./layout/AppFooter";
import { NavigationBar } from "./layout/NavigationBar";

const sortedNavigationItems = navigationItems.toSorted(
  (a, b) => a.sortOrder - b.sortOrder,
);

function App() {
  return (
    <main className="min-h-lvh flex flex-col justify-between items-center">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center">
          <h1
            className="md:text-7xl text-5xl bg-gray-800 text-soft-blue
            font-brush font-medium uppercase tracking-widest
            mt-10 px-3 py-3 rotate-1"
          >
            Janitors
          </h1>
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
