import React from 'react'
import "../comp-layout/LayoutContent.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageCliente } from '../pages/PageCliente';

export const LayoutContent = () => {
  return (
    <div className='content'><BrowserRouter>
    <Routes>
      <Route path="/" element={<PageCliente />} />
      <Route path="/Clientes" element={<PageCliente />}/>
      <Route path="*" element={(<><h1>Error 404</h1><strong>Esta Pagina no existe</strong></>)}/>
    </Routes>
  </BrowserRouter></div>
    
  )
}
