import React from "react";

import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { PageCliente } from "../pages/PageCliente";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageCliente />} />
        <Route path="/Clientes" element={<PageCliente />}/>
        <Route path="*" element={(<><h1>Error 404</h1><strong>Esta Pagina no existe</strong></>)}/>
      </Routes>
    </BrowserRouter>
  );
};
