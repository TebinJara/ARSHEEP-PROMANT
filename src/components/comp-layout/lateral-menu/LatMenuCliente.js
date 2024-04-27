import React from 'react'
import "../lateral-menu/LatMenuCliente.css";

export const LatMenuCliente = () => {
  return (
    <div className='lat-menu'>
        <ul>
            <li> <a href='/#'>Listar Clientes</a></li>
            <li> <a href='/#'>Agregar Clientes</a></li>
            <li> <a href='/#'>Quitar Clientes</a></li>
            <li> <a href='/#'>Modificar Clientes</a></li>
            <li> <a href='/#'>Salir</a></li>
        </ul>
    </div>
  )
}
