import React from "react";
import "../Layout/Layout.css";
import { LayoutHeader } from "../comp-layout/LayoutHeader";
import { LayoutNav } from "../comp-layout/LayoutNav";
import { LayoutContent } from "../comp-layout/LayoutContent";
import { LayoutFooter } from "../comp-layout/LayoutFooter";


export const Layout = () => {
  return (
    <div className="layout">
      <div className="header"><LayoutHeader/></div>
      <div className="nav"><LayoutNav/></div>
      <div className="content"><LayoutContent/></div>
      <div className="footer"><LayoutFooter/></div>
    </div>
  );
};
