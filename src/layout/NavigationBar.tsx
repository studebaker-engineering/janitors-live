import { Link } from "wouter";
import type { NavigationItem } from "@/types";

interface PropTypes {
  navigationItems: NavigationItem[];
}

export const NavigationBar = ({ navigationItems }: PropTypes) => (
  <div className="flex justify-center items-center mt-5 px-10">
    <nav>
      <ul className="list-none list-inside flex gap-8 font-typewriter uppercase">
        {navigationItems.map((item) => (
          <li
            key={item.link}
            className={`bg-gray-800 text-soft-blue px-2 md:text-xl text-lg ${item.className} border-2 border-dashed border-gray-800`}
          >
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);
