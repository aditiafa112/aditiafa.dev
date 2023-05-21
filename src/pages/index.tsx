import { ListNavbar } from "@/components/base/navbar";
import LandingLayout from "@/components/layouts/LandingLayout";

export default function Home() {
  return (
    <LandingLayout footerFixedMode className="items-center justify-center">
      <div className="z-10 w-full max-w-screen-lg">
        <h1 className="mb-6 text-xl font-bold sm:text-2xl md:text-4xl">
          DITLAB{" "}
          <span className="font-w align-top text-sm font-bold">&#169;</span>
        </h1>
        <p className="mb-6 text-sm sm:text-xl md:text-2xl">
          It called <span className="rounded-md px-1">ditlab</span> but there is
          no lab activity here. Just something about me 😁
        </p>
        <p className="mb-6 text-sm sm:text-xl md:mb-10 md:text-2xl">
          Before asking me more, you can go to about me page to know about what
          I&apos;m doing in daily, maybe there you&apos;ll find the answer .
        </p>
      </div>
      <ListNavbar />
    </LandingLayout>
  );
}
