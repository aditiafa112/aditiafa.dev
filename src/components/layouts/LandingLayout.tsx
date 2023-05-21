import React, { Fragment } from "react";

import Content from "../base/content";
import Footer from "../base/footer";
import Header from "../base/header";

interface IMainLayout {
  children: React.ReactNode;
  className?: string;
  footerFixedMode?: boolean;
}

export default function LandingLayout({ children, className }: IMainLayout) {
  return (
    <Fragment>
      <Header />
      <Content className={className}>{children}</Content>
      <Footer fixedMode={true} />
    </Fragment>
  );
}
