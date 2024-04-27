import React from "react";
import "../comp-layout/LayoutHeader.css";

export const LayoutHeader = () => {
  return (
    <header className="header">
      <div className="logo-empresa">
        <img src="img/logo-empresa.png" alt="Descripción" />
      </div>

      <div className="logo-arsheep">
        <img src="img/logo-arsheep.png" alt="Descripción" />
        <h1>ARSHEEP</h1>
      </div>
    </header>
  );
};
