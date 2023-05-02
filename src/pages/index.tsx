import MainLayout from "@/components/layouts/MainLayout";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center min-h-screen max-w-screen-lg mx-auto">
        <Image
          src="/splash.svg"
          height={599}
          width={650}
          alt={"background-splash"}
          className="fixed"
          draggable={false}
        />
        <div className="max-w-screen-lg w-full px-8 z-10">
          <h1 className="text-slate-700 text-xl md:text-4xl mb-6 font-bold">
            DITLAB{" "}
            <span className="text-sm align-top font-w font-bold">&#169;</span>
          </h1>
          <p className="text-slate-700 font-normal text-sm md:text-2xl mb-6">
            It called{" "}
            <span className="bg-yellow-300 text-slate-700 rounded-md px-1">
              ditlab
            </span>{" "}
            but there is no lab activity here. Just something about me 😁
          </p>
          <p className="text-slate-700 font-normal text-sm md:text-2xl mb-6 md:mb-10">
            Before asking me more, you can go to about me page to know about
            what I&apos;m doing in daily, maybe there you&apos;ll find the
            answer .
          </p>
        </div>

        <div className="z-10 max-w-screen-lg w-full px-8">
          <nav className="flex flex-col md:flex-row">
            <a className="text-slate-700 mb-6 mr-6 text-sm md:text-2xl font-medium">
              01 about me
            </a>
            <a className="text-slate-700 mb-6 mr-6 text-sm md:text-2xl font-medium">
              02 portofolio
            </a>
            <a className="text-slate-700 mb-6 mr-6 text-sm md:text-2xl font-medium">
              03 snippet
            </a>
            <a className="text-slate-700 mb-6 mr-6 text-sm md:text-2xl font-medium">
              04 contact
            </a>
          </nav>
        </div>
      </div>
    </MainLayout>
  );
}
