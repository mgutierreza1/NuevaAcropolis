import React, { useEffect, useState } from 'react';
import Select from 'react-select'; // Importa el componente de react-select
import { ThemeProvider } from "@material-tailwind/react";
import { usePeople } from '../hooks/people.hook';
import CustomTable from "../../../core/components/CustomTable.component.jsx";

const PeoplePage = () => {
    // Datos con clave-valor
    const headers = ["full_name", "phone_number", "email", "user_type", "created_at"];
    const { people, getAll, loading, error } = usePeople();

    useEffect(() => {
        getAll();
    }, [getAll]);

    // Estado para la selección de personas
    const [selectedPerson, setSelectedPerson] = useState(null);

    // Manejar la selección de la persona
    const handlePersonChange = (selectedOption) => {
        setSelectedPerson(selectedOption);
        console.log('Persona seleccionada:', selectedOption);
    };

    // Preparar opciones para react-select
    const peopleOptions = people.map((person) => {
        const key = person.id;
        const value = person.name  + ' ' + person.lastname;
        return { value: key, label: value };
    });

    // Interfaz
    return (
        <ThemeProvider>
            <div className="container mx-auto px-4">
                <div>
                    <h1 style={{ fontSize: 'larger' }}>Gestión de personas</h1>

                    <div className='fieldSetFilters'>
                        <Select
                            placeholder="Seleccione un taller"
                        />
                    </div>
                    
                    <div className='fieldSetButtons'>
                        <div style={{float: 'left'}}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Buscar
                            </button>
                        </div>

                        <div style={{float: 'right'}}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => document.getElementById('create_person').showModal()}>
                                Nueva persona
                            </button>

                            <button style={{ marginLeft: '5px' }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Exportar a excel
                            </button>
                        </div>
                    </div>

                    {/* Tabla de personas */}
                    <div className="flex justify-center">
                        {loading ? (
                        <p>Cargando...</p>
                        ) : (
                        <CustomTable
                            headers={headers}
                            data={people}
                            totalItems={people.length}
                            itemsPerPageParam={10}
                            
                        />
                        )}
                    </div>

                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                </div>

            </div>
                <dialog id="create_person" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Registra un nuevo estudiante/instructor</h3>
                        <p className="py-4">Ingresa los datos de la persona</p>
                        <div>
                            <form method="dialog">
                                <div id='inputsCreate' style={{ margin: '10px auto' }}>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Nombres</span>
                                        </div>
                                        <input type="text" placeholder="Ingrese los nombres" className="input input-bordered w-full max-w-xs" />
                                    </label>

                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Apellidos</span>
                                        </div>
                                        <input type="text" placeholder="Ingrese los apellidos" className="input input-bordered w-full max-w-xs" />
                                    </label>
                                </div>

                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Cancelar</button>
                            </form>
                        </div>
                    </div>
                </dialog>
        </ThemeProvider>
    );
};

export default PeoplePage;
