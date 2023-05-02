import React from "react";

import localFont from "next/font/local";
import Header from "../Base/header";

const WorkSans = localFont({
  variable: "--font-work-sans",
  src: [
    {
      path: "../../styles/fonts/WorkSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../styles/fonts/WorkSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../styles/fonts/WorkSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
interface IMainLayout {
  children: React.ReactNode;
}

export default function MainLayout2({ children }: IMainLayout) {
  return (
    <>
      <Header />
      <main className={`${WorkSans.className} min-h-screen`}>{children}</main>
    </>
  );
}
