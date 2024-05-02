import React, { useEffect, useState } from 'react'
import './TablaClientes.css';

const dataInicial = [
    { id: 1, rut: '12.345.678-9', direccion: 'Calle Falsa 123', telefono: '12345678', correo: 'cliente1@example.com' },
    { id: 2, rut: '98.765.432-1', direccion: 'Avenida Siempre Viva 321', telefono: '87654321', correo: 'cliente2@example.com' },
    { id: 3, rut: '11.222.333-K', direccion: 'Calle Libertad 456', telefono: '123456789', correo: 'cliente3@example.com' },
    { id: 4, rut: '22.333.444-7', direccion: 'Pasaje Los Robles 567', telefono: '987654321', correo: 'cliente4@example.com' },
    { id: 5, rut: '33.444.555-6', direccion: 'Avenida Los Pinos 678', telefono: '456789123', correo: 'cliente5@example.com' },
    { id: 6, rut: '44.555.666-5', direccion: 'Callejón Las Flores 789', telefono: '321654987', correo: 'cliente6@example.com' },
    { id: 7, rut: '55.666.777-4', direccion: 'Paseo Los Olivos 890', telefono: '987123456', correo: 'cliente7@example.com' },
    { id: 8, rut: '66.777.888-3', direccion: 'Camino La Esperanza 123', telefono: '654987321', correo: 'cliente8@example.com' },
    { id: 9, rut: '77.888.999-2', direccion: 'Boulevard El Sol 234', telefono: '789456123', correo: 'cliente9@example.com' },
    { id: 10, rut: '88.999.000-1', direccion: 'Alameda El Viento 345', telefono: '567321654', correo: 'cliente10@example.com' },
    { id: 11, rut: '99.000.111-0', direccion: 'Ruta La Luna 456', telefono: '432156789', correo: 'cliente11@example.com' },
    { id: 12, rut: '10.111.222-X', direccion: 'Vía Las Estrellas 567', telefono: '654123789', correo: 'cliente12@example.com' },


];


export const TablaClientes = () => {
    const [data, setData] = useState(dataInicial);
    const [filtroCampo, setFiltroCampo] = useState('');
    const [filtroValor, setFiltroValor] = useState('');
    const [cantClientes, setCantClientes] = useState(data.length);
    const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

    useEffect(() => {
        setCantClientes(data.length);
    }, [data.length]);

    const aplicarFiltro = () => {
        if (filtroCampo && filtroValor) {
            setData(dataInicial.filter(cliente =>
                cliente[filtroCampo].toString().toLowerCase().includes(filtroValor.toLowerCase())
            ));
        }
    };

    const deshacerFiltro = () => {
        setData(dataInicial);
        setFiltroValor('');
    };

    const seleccionarCliente = cliente => {
        setClienteSeleccionado(cliente);
    };

    return (
        <div className='clientes-container'>
            <h2>Listado de Clientes</h2>
            <div className="clientes-container-2">
                <div className='clientes-container-left'>
                    <div className="filter-container">
                        <select value={filtroCampo} onChange={e => setFiltroCampo(e.target.value)}>
                            <option value="">Selecciona un campo</option>
                            <option value="rut">RUT</option>
                            <option value="direccion">Dirección</option>
                            <option value="telefono">Teléfono</option>
                            <option value="correo">Correo Electrónico</option>
                        </select>
                        <input
                            type="text"
                            value={filtroValor}
                            onChange={e => setFiltroValor(e.target.value)}
                            placeholder="Ingresa valor a filtrar"
                        />
                        <button onClick={aplicarFiltro}>Filtrar</button>
                        <button onClick={deshacerFiltro}>Deshacer</button>
                        <p>Cantidad de Clientes: {cantClientes}</p>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>N° de Cliente</th>
                                <th>RUT</th>
                                <th>Dirección</th>
                                <th>Teléfono</th>
                                <th>Correo Electrónico</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((cliente) => (
                                <tr key={cliente.id} onClick={() => seleccionarCliente(cliente)} className="table-row">
                                    <td>{cliente.id}</td>
                                    <td>{cliente.rut}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.correo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='info-cliente'>
                    {clienteSeleccionado && (
                        <div className='info-cliente-see'>
                            <div className='data-cliente'>
                                <h2>Información del Cliente</h2>
                                <p><strong>RUT:</strong> {clienteSeleccionado.rut}</p>
                                <p><strong>Dirección:</strong> {clienteSeleccionado.direccion}</p>
                                <p><strong>Teléfono:</strong> {clienteSeleccionado.telefono}</p>
                                <p><strong>Correo Electrónico:</strong> {clienteSeleccionado.correo}</p>

                            </div>
                            <div className='buttons-data-cliente'>
                                <button>Exportar a Excel</button>
                                <button>Imprimir</button>
                                <button>Editar</button>
                            </div>

                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};