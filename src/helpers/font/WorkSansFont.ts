import localFont from "next/font/local";

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

const { className } = WorkSans;

export { className };
export default WorkSans;
