import clsxm from "@/utils/clsxm";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import LIST_MENU from "./ListMenu";
import Image from "next/image";
import useScrollListener from "@/hooks/useScrollListener";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;
  const [open, setOpen] = useState(false);
  const [transparent, setTransparent] = useState(true);

  useScrollListener(({ scrollY }) => {
    setTransparent(scrollY < 5);
  }, "window");

  return (
    <nav
      className={clsxm(
        "fixed top-0 z-20 w-full bg-transparent transition duration-300 ease-in-out",
        !transparent && "bg-white shadow-md"
      )}
    >
      <div className="mx-auto flex h-12 max-w-screen-lg items-center justify-between px-8 md:h-24">
        <Link
          as="/"
          href="/"
          className="rounded-sm bg-slate-700 px-1 text-lg font-bold text-white"
        >
          DITLAB
        </Link>
        <Image
          src={"/icons/general/bars-3.svg"}
          width={24}
          height={24}
          alt="menu-bars"
          draggable={false}
          className="block cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        />

        <div
          className={clsxm(
            "hidden sm:block",
            open &&
              "fixed left-1/2 right-1/2 top-0 z-20 mt-2 flex w-[95%] -translate-x-1/2 flex-col bg-white p-4"
          )}
        >
          {open && (
            <>
              <h3 className="mx-2 bg-slate-700 px-[4px] text-lg font-medium text-white">
                Menu
              </h3>
              <hr />
            </>
          )}
          <Link
            href="/"
            className={clsxm(
              "mx-2 px-1 text-lg font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-slate-700 hover:text-white"
            )}
          >
            Home
          </Link>
          {LIST_MENU.map((menu) => {
            return (
              <Link
                as={menu.url}
                key={menu.id}
                href={menu.url}
                className={clsxm(
                  "mx-2 px-1 text-lg font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-slate-700 hover:text-white",
                  pathname.toLowerCase() === menu.url &&
                    "border-slate-700 sm:border-b-2"
                )}
              >
                {menu.name}
              </Link>
            );
          })}
        </div>
        <div
          className={clsxm(
            "hidden",
            open &&
              "fixed bottom-0 left-0 z-10 block h-screen w-full bg-gray-700 opacity-50"
          )}
          onClick={() => setOpen(false)}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
