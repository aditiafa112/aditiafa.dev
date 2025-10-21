import MainLayout from "@/components/layouts/MainLayout";
import React from "react";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  // Function to navigate to contact page with state
  const navigateToContact = () => {
    const stateData = {
      from: "about",
      timestamp: Date.now(),
      user: "visitor",
      navigationType: "button_click",
      previousPage: "about",
      data: {
        message: "Navigated from About page",
        source: "about_navigation_button",
      },
    };

    // Push state and navigate using Next.js Router
    history.pushState(stateData, "Contact Page", "/contact");

    // Navigate to contact page using Next.js Router
    router.push("/contact");
  };

  return (
    <MainLayout>
      <h1 className="mx-auto mb-6 whitespace-nowrap text-xl font-bold sm:text-2xl md:text-4xl">
        About Me
      </h1>

      {/* Navigation Button */}
      <div className="mx-auto mb-6 text-center">
        <button
          onClick={navigateToContact}
          className="rounded bg-green-600 px-6 py-3 text-white transition-colors duration-200 hover:bg-green-700"
        >
          Go to Contact Page
        </button>
        <p className="mt-2 text-sm text-gray-600">
          Click to navigate to Contact page with state data
        </p>
      </div>

      <section className="mb-8" id="about-me">
        <p>What I&apos;m doing right now?</p>
        <p>
          Thanks to God and to everyone who has helped me reach this point,
          including myself.
        </p>
        <p>
          This page is meant to describe what I am currently doing, so perhaps
          you won&apos;t need to ask me once you have read it.
        </p>
        <blockquote className=" ml-3 mt-6 border-l-4 border-slate-700 pl-3 md:ml-6">
          If you have your own site, maybe you should to make one too.
        </blockquote>
      </section>
      <section className="mb-8" id="living">
        <h2 className="mb-1 text-lg font-bold sm:text-xl md:text-2xl">
          Living
        </h2>
        <p>
          I’m in Surabaya city right now after getting full-time remotely job
          since January 2020.
        </p>
        <p>sometime i went to Jakarta city for meet my working team.</p>
      </section>
      <section className="mb-8" id="activities">
        <h2 className="mb-1 text-lg font-bold sm:text-xl md:text-2xl">
          Activities
        </h2>
        <ul className="ml-[13px] list-outside list-disc">
          <li>
            <p className="inline">Still trying to find love</p>
          </li>
          <li>
            <p className="inline">Working with my belove macbook</p>
          </li>
          <li>
            <p className="inline">Currenly Learning Next JS and Tailwind CSS</p>
          </li>
          <li>
            <p className="inline">
              Learning and research some technology stuff from the internet
            </p>
          </li>
          <li>
            <p className="inline">
              Social Media, Gaming, Coding, Listening music, Watching Film,
              Reading, Jogging
            </p>
          </li>
        </ul>
      </section>
      <section className="mb-8" id="music">
        <h2 className="mb-1 text-lg font-bold sm:text-xl md:text-2xl">
          Music that i&apos;m listening
        </h2>
        <p>
          You can check my{" "}
          <a
            href="https://open.spotify.com/user/0nlz0ak6wgsz2s3ekyiif3bom?si=1cf706b599514ffc"
            target="_blank"
            className=" text-blue-600 hover:text-blue-700"
          >
            Spotify
          </a>{" "}
          Profile, but sometime i just listening to lofi.
        </p>
      </section>
      <section className="mb-8" id="tech-used">
        <h2 className="mb-1 text-lg font-bold sm:text-xl md:text-2xl">
          Technology that I&apos;m using on
        </h2>
        <ul className="ml-[13px] list-outside list-disc">
          <li>
            <p className="inline">Javascript/Typescript</p>
          </li>
          <li>
            <p className="inline">React Web/Native/NextJS</p>
          </li>
          <li>
            <p className="inline">Jest, React Testing Library</p>
          </li>
          <li>
            <p className="inline">Storybook</p>
          </li>
          <li>
            <p className="inline">Tailwind/AntDesign/MUI</p>
          </li>
        </ul>
      </section>
      <section className="mb-8" id="software-used">
        <h2 className="mb-1 text-lg font-bold sm:text-xl md:text-2xl">
          Software programs that I use daily
        </h2>
        <ul className="ml-[13px] list-outside list-disc">
          <li>
            <p className="inline">Operating System: MacOS Ventura 13.2.1</p>
          </li>
          <li>
            <p className="inline">Code Editor: Visual Studio Code</p>
          </li>
          <li>
            <p className="inline">Browsers: Arc Browser</p>
          </li>
          <li>
            <p className="inline">Others: Jira, Postman, Figma, Discord</p>
          </li>
        </ul>
      </section>
      <section className="mb-8" id="wfh-setup">
        <h2 className="mb-1 text-lg font-bold sm:text-xl md:text-2xl">
          Work From Home setup
        </h2>
        <ul className="ml-[13px] list-outside list-disc">
          <li>
            <p className="inline">Laptop Macbook Air M1 8/256 (2020)</p>
          </li>
          <li>
            <p className="inline">Keyboard Anker Ultra Slim A7726</p>
          </li>
          <li>
            <p className="inline">Mouse Logitect Pebble M350</p>
          </li>
          <li>
            <p className="inline">Mouse Wrist Pad</p>
          </li>
          <li>
            <p className="inline">Deskmat Sades SD84 - UMI</p>
          </li>
          <li>
            <p className="inline">Monitor LG 24MK600 (24 Inc)</p>
          </li>
          <li>
            <p className="inline">Monitor Bracket NB h200 Gas Strut</p>
          </li>
          <li>
            <p className="inline">Noir NEO-C Ergonomic Office Chair</p>
          </li>
          <li>
            <p className="inline">TWS Moondrop Nekocake Kuroneko</p>
          </li>
        </ul>
      </section>
      <section className="mb-8" id="game-setup">
        <h2 className="mb-1 text-lg font-bold sm:text-xl md:text-2xl">
          Game setup
        </h2>
        <p className="mb-1">
          prefer play game in mobile phone platform than desktop.
        </p>
        <ul className="ml-[13px] list-outside list-disc">
          <li>
            <p className="inline">Poco F4 8/256</p>
          </li>
          <li>
            <p className="inline">Acer Aspire 6 - Captain America Edition</p>
          </li>
        </ul>
      </section>
      <section className="mb-8" id="game-setup">
        <h2 className="mb-1 text-lg font-bold sm:text-xl md:text-2xl">
          Inspirate make this site
        </h2>
        <ul className="ml-[13px] list-outside list-disc">
          <li>
            <p className="inline">
              Thanks to mas{" "}
              <a
                href="https://gading.dev/"
                target="_blank"
                className="text-blue-600 hover:text-blue-700"
              >
                gading
              </a>
              . I made this site after visit his site as a main inspiration{" "}
              <br /> and maybe you should check his website too.
            </p>
          </li>
          <li>
            <p className="inline">
              to{" "}
              <a
                href="https://www.instagram.com/zfachrian/?hl=en"
                target="_blank"
                className=" text-blue-600 hover:text-blue-700"
              >
                Zuhad Achmad Fachrian.
              </a>{" "}
              for help me desain this site, i appreciate to you.
            </p>
          </li>
          <li>
            <p className="inline">
              to{" "}
              <a
                href="https://azhariemuhammad.netlify.app/"
                target="_blank"
                className=" text-blue-600 hover:text-blue-700"
              >
                Azharie Muhammad.
              </a>{" "}
              because the menu called story inspire after visiting your site.
            </p>
          </li>
        </ul>
      </section>
    </MainLayout>
  );
}
