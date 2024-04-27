import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import "../comp-layout/LayoutNav.css";
import { InfoProfile } from "./InfoProfile";
import { PageCliente } from "../pages/PageCliente";

export const LayoutNav = ({ onMenuSelect }) => {
  return (
    <div className="nav">
      <div nav-list>
        <ul>
          <li>
            {" "}
            <a href="/#">Clientes</a>
          </li>

          <li>
            {" "}
            <a href="/#">Ordenes de Trabajo</a>
          </li>

          <li>
            {" "}
            <a href="/#">Tickets</a>
          </li>

          <li>
            {" "}
            <a href="/#">Configuración</a>
          </li>

          <li>
            {" "}
            <a href="/#">Salir</a>
          </li>
        </ul>
      </div>
      <div className="info-profile">
        <InfoProfile />
      </div>
   
     
    </div>
  );
};
