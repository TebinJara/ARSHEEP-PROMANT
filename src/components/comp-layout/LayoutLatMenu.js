import React, { useState } from "react";
import "../comp-layout/LayoutLatMenu.css";

export const LayoutLatMenu = () => {
    return (
        <div className="lat-menu">
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
                <li>
                    {" "}
                    <a href="/#">Client</a>
                </li>
                <li>
                    {" "}
                    <a href="/#">Ordenes de Trabajo</a>
                </li>
                <li>
                    {" "}
                    <a href="/#">Tickets</a>
                </li>
            </ul>
        </div>
    );
};
