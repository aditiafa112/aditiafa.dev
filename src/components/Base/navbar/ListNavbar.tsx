import Link from "next/link";
import React from "react";
import LIST_MENU from "./ListMenu";

function Navbar() {
  return (
    <div className="z-10 w-full max-w-screen-lg">
      <nav className="flex flex-col md:flex-row">
        {LIST_MENU.map((menu) => {
          return (
            <Link
              key={menu.id}
              href={menu.url}
              className="mb-6 mr-6 text-sm font-medium text-slate-700 sm:text-xl md:text-2xl "
              as={menu.url}
            >
              {menu.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
