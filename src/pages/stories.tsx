import MainLayout from "@/components/layouts/MainLayout";
import { dateFormat } from "@/utils/dateFormat";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";

type StroriesItem = {
  title: string;
  pubDate: string;
  link: string;
};

type MediumStories = {
  status: string;
  feed: {
    link: string;
    title: string;
  };
  items: StroriesItem[];
};

const Career: NextPage<MediumStories> = (props) => {
  const { feed, items } = props;
  return (
    <MainLayout>
      <h1 className="mx-auto mb-6 whitespace-nowrap text-xl font-bold sm:text-2xl md:text-4xl">
        Stories
      </h1>
      <section className="mb-8" id="feed">
        <p>
          {feed.title}, click{" "}
          <a
            href={feed.link}
            target="_blank"
            className="text-blue-600 hover:underline hover:decoration-blue-600"
          >
            here{" "}
          </a>
          to visit my medium.
        </p>
      </section>
      <ul className="list-outside list-decimal">
        {Array.isArray(items) &&
          items.map((item, index) => {
            return (
              <li
                key={item.title}
                className="group mb-2 ml-[13px] w-fit marker:text-slate-700 hover:marker:text-amber-500"
              >
                <Link
                  href={item.link}
                  target="_blank"
                  className="flex flex-col"
                >
                  <h3 className=" group-hover:text-amber-500">{item.title}.</h3>
                  <p className="group-hover:text-amber-500">
                    {dateFormat(item.pubDate)}.
                  </p>
                </Link>
              </li>
            );
          })}
      </ul>
    </MainLayout>
  );
};

export default Career;

export const getStaticProps: GetStaticProps<MediumStories> = async () => {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aditiafa112"
  );
  const data = await res.json();

  return {
    props: data,
  };
};
