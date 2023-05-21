import clsxm from "@/utils/clsxm";
import React, { FunctionComponent, PropsWithChildren } from "react";

interface IFooter {
  fixedMode?: boolean;
}

const Footer: FunctionComponent<PropsWithChildren<IFooter>> = (props) => {
  const { fixedMode } = props;

  const styleFooter = clsxm(
    "max-w-screen-lg w-full z-10 px-8 mx-auto mt-10 mb-10",
    fixedMode &&
      "fixed w-full z-10 bottom-0 max-w-screen-lg px-8 left-1/2 -translate-x-1/2 mt-0 mx-0"
  );

  return (
    <footer className={styleFooter}>
      <p className="text-sm">
        © 2023 aditia.dev build with 奇跡 (kiseki) By Aditia F.A.
      </p>
    </footer>
  );
};
export default Footer;
