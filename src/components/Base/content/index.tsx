import clsxm from "@/utils/clsxm";
import React, { FunctionComponent, PropsWithChildren } from "react";
import WorkSans from "@/helpers/font/WorkSansFont";
import Image from "next/image";

interface IContent {
  children: React.ReactNode;
  className?: string;
}

const Content: FunctionComponent<PropsWithChildren<IContent>> = (props) => {
  const { children, className } = props;

  return (
    <main
      className={clsxm(
        WorkSans.className,
        "relative mx-auto flex w-full max-w-screen-lg flex-1 flex-col px-8",
        className
      )}
    >
      {children}
    </main>
  );
};

export default Content;
