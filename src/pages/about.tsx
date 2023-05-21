import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

export default function About() {
  return (
    <MainLayout>
      <h1 className="mx-auto mb-6 whitespace-nowrap text-xl font-bold sm:text-2xl md:text-4xl">
        About Me
      </h1>
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
          You can check my Spotify Profile, but sometime i just listening to
          lofi (you know la).
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
          Work From Home setup
        </h2>
        <p className="mb-1">
          I prefer play game in mobile phone platform than desktop.
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
    </MainLayout>
  );
}
