import React, { Fragment, useState } from "react";

import Content from "../base/content";
import Footer from "../base/footer";
import Header from "../base/header";
import { Navbar } from "../base/navbar";

interface IMainLayout {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Content className={"min-h-[50vh] pt-[100px] md:pt-[150px]"}>
        {children}
      </Content>
      <Footer />
    </Fragment>
  );
}
