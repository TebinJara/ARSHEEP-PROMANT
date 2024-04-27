import React from 'react'
import { LatMenuCliente } from '../comp-layout/lateral-menu/LatMenuCliente';
import "../pages/PageCliente.css";

export const PageCliente = () => {
    return (
        <div className='page-cliente'>

            <div lat-menu>
                <LatMenuCliente />
            </div>

            <div className='content'>
                <h1>Cliente</h1>
                <h1>Cliente</h1>
                <h1>Cliente</h1>
                <h1>Cliente</h1>
                <h1>Cliente</h1>
                <h1>Cliente</h1>
                <h1>Cliente</h1>
          
            </div>
        </div>
    )
}
