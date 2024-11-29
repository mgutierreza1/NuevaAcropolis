import { BarChart } from '@mui/x-charts/BarChart';
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import AttributionRoundedIcon from '@mui/icons-material/AttributionRounded';

const MainContainer = () => {
    return (
        <div className='container mx-auto px-4'>
            <h1 style={{ color: '#0a504c', fontWeight: 'bold', fontSize: '20pt' }}>DASHBOARD NUEVA ACRÓPOLIS</h1>

            <div className='btnsDashboard'>
                <button style={{ backgroundColor: '#FFF', color: '#0a504c', borderColor: '#0a504c', borderWidth: 2 }} className='btn'>GENERAR REPORTE</button>
                <button style={{ backgroundColor: '#FFF', color: '#0a504c', borderColor: '#0a504c', borderWidth: 2 }} className='btn'>REGISTRAR ALUMNO</button>
                <button style={{ backgroundColor: '#FFF', color: '#0a504c', borderColor: '#0a504c', borderWidth: 2 }} className='btn'>REGISTRAR MOVIMIENTO</button>
            </div>

            <div className='cardsInfo'>
                <div style={{ backgroundColor: '#0a504c', opacity: '85%' }} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <SchoolIcon style={{ fontSize: 80, color: '#FFF', textAlign: 'center', margin: '0 auto' }} className="text-primary mb-4" />
                        <h2 style={{ textAlign: 'center', color: '#FFF', margin: '0 auto' }} className="card-title">5 Talleres Activos</h2>
                    </div>
                </div>

                <div style={{ backgroundColor: '#0a504c', opacity: '85%' }} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <PaymentsRoundedIcon style={{ fontSize: 80, color: '#FFF', textAlign: 'center', margin: '0 auto' }} className="text-primary mb-4" />
                        <h2 style={{ textAlign: 'center', color: '#FFF', margin: '0 auto' }} className="card-title">10 Cuotas Pendientes</h2>
                    </div>
                </div>

                <div style={{ backgroundColor: '#0a504c', opacity: '85%' }} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <PlaylistAddCheckCircleRoundedIcon style={{ fontSize: 80, color: '#FFF', textAlign: 'center', margin: '0 auto' }} className="text-primary mb-4" />
                        <h2 style={{ textAlign: 'center', color: '#FFF', margin: '0 auto' }} className="card-title">50% De Cumplimiento</h2>
                    </div>
                </div>

                <div style={{ backgroundColor: '#0a504c', opacity: '85%' }} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <AttributionRoundedIcon style={{ fontSize: 80, color: '#FFF', textAlign: 'center', margin: '0 auto' }} className="text-primary mb-4" />
                        <h2 style={{ textAlign: 'center', color: '#FFF', margin: '0 auto' }} className="card-title">2 Deudores</h2>
                    </div>
                </div>
            </div>

            <div id='chartVersus'>
                <BarChart
                    xAxis={[
                        {
                            id: 'months',
                            data: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            id: 'ingresos',
                            label: 'Ingresos',
                            data: [5000, 7000, 6000, 8000, 7500, 9000],
                            color: '#0a504c',  // Color para ingresos
                        },
                        {
                            id: 'egresos',
                            label: 'Egresos',
                            data: [3000, 4000, 3500, 5000, 4500, 6000],
                            color: '#ff6f61',  // Color para egresos
                        },
                    ]}
                    height={400}
                    responsive={true}  // Habilita el comportamiento responsive
                    legend={{
                        position: 'top',
                    }}
                />

                <div id='tblVersus'>
                    <table className='table table-zebra'>
                        <thead style={{ backgroundColor: 'gray', color: '#FFF' }}>
                            <th>Movimiento</th>
                            <th>Fecha</th>
                            <th>Concepto</th>
                            <th>Monto</th>
                            <th>Acción</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Egreso</td>
                                <td>2024-10-10</td>
                                <td>Equipo de oficina</td>
                                <td>500</td>
                                <td>
                                    <button className='btn btn-primary'>Editar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ingreso</td>
                                <td>2024-10-10</td>
                                <td>Venta de libros</td>
                                <td>500</td>
                                <td>
                                    <button className='btn btn-primary'>Editar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Egreso</td>
                                <td>2024-10-12</td>
                                <td>Repuesto de cocina</td>
                                <td>200</td>
                                <td>
                                    <button className='btn btn-primary'>Editar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ingreso</td>
                                <td>2024-10-12</td>
                                <td>Pago de cuota</td>
                                <td>170</td>
                                <td>
                                    <button className='btn btn-primary'>Editar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ingreso</td>
                                <td>2024-10-13</td>
                                <td>Pago de cuota</td>
                                <td>100</td>
                                <td>
                                    <button className='btn btn-primary'>Editar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
