import React, { useEffect, useState } from 'react';
import Select from 'react-select'; // Importa el componente de react-select
import { ThemeProvider } from "@material-tailwind/react";
import { useWorkshops } from '../../workshop/hooks/userWorkshop.hook.jsx';

const PeoplePage = () => {
    // Datos con clave-valor
    const personas = [{'J01P': 'Jane Doe'}, {'M02P': 'Melvin Gutierrez'}, {'A03P': 'Angel Wayar'}];
    const nivelesEducacion = [{'E': 'Estudiantes'}, {'P': 'Profesionales'}];
    const nivelesEscuela = [{'A': 'Alumno'}, {'I': 'Instructor'}];

    // Estado para la selección de personas
    const [selectedPerson, setSelectedPerson] = useState(null);

    // Lista de talleres - cursos
    const { workshops, getAll, loading, error } = useWorkshops();

    // Get All items
    useEffect(() => {
        getAll();
    }, [getAll]);

    // Manejar la selección de la persona
    const handlePersonChange = (selectedOption) => {
        setSelectedPerson(selectedOption);
        console.log('Persona seleccionada:', selectedOption);
    };

    // Preparar opciones para react-select
    const personaOptions = personas.map((persona) => {
        const key = Object.keys(persona)[0];
        const value = persona[key];
        return { value: key, label: value };
    });

    // Interfaz
    return (
        <ThemeProvider>
            <div className='fullScreenPage'>
                <div style={{ margin: '1.5em' }}>
                    <h1 style={{ fontSize: 'larger' }}>Gestión de personas</h1>

                    <div className='fieldSetFilters'>
                        <Select
                            value={selectedPerson}
                            onChange={handlePersonChange}
                            options={personaOptions} // Aquí usamos las opciones preparadas
                            placeholder="Seleccione una persona"
                        />
                    </div>
                    
                    <div className='fieldSetButtons'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Buscar
                        </button>

                        <button style={{ marginLeft: '5px' }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Nueva persona
                        </button>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default PeoplePage;
