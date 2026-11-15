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
            className={`md:text-xl text-lg ${item.className}`}
          >
            <Link
              className={(active) =>
                active
                  ? "text-gray-800 bg-soft-blue border-2 border-dashed border-gray-800 px-2 font-bold hover:text-soft-blue hover:bg-gray-800 transition-colors"
                  : "bg-gray-800 text-soft-blue border-2 border-dashed border-gray-800 px-2"
              }
              href={item.link}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);
