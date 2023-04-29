import useScrollListener from "@/hooks/useScrollListener";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [transparent, setTransparent] = useState(true);
  useScrollListener(({ scrollY }) => {
    setTransparent(scrollY < 5);
  }, "window");
  return (
    <header
      className={
        transparent
          ? "fixed top-0 z-10 w-full"
          : "fixed top-0 z-10 w-full bg-blue-700"
      }
    >
      <nav>
        <div className="max-w-screen-lg flex align-middle flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 aspect-square"
              alt="Flowbite Logo"
              height={32}
              width={32}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Ditlab
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li className={transparent ? "border-b-2 border-blue-700" : "border-b-2 border-white"}>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded md:bg-transparent text-white border- md:p-0 hover:text-blue-400"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:text-blue-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
