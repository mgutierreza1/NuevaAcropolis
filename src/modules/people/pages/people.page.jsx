import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select'; // Importa el componente de react-select
import { ThemeProvider } from "@material-tailwind/react";
import { usePeople } from '../hooks/people.hook';
import { useSavePerson } from '../hooks/create_person.hook.jsx';
import { useWorkshops } from '../../workshop/hooks/useWorkshop.hook.jsx';
import CustomTable from "../../../core/components/CustomTable.component.jsx";

const PeoplePage = () => {
    // Datos con clave-valor
    const headers = ["full_name", "phone_number", "user_type", "created_at"];
    const { people, getAllPersonas, loadingPeople, errorPeople } = usePeople();
    
    // Lista de talleres
    const { workshops, getAll, loading, error } = useWorkshops();

    useEffect(() => {
        getAllPersonas();
        getAll();
    }, [getAllPersonas, getAll]);

    const { savePersona, loadingCreatePerson, errorCreatePerson } = useSavePerson();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            lastname: '',
            phone_number: '',
            email: '',
            user_type: ''
        },
    });

    const onSubmit = handleSubmit((data) => {
        savePersona(data);
    });

    // Mapea los workshops para que tengan el formato correcto
    const workshopOptions = workshops.map(workshop => ({
        value: workshop.id,
        label: workshop.name
    }));

    // Interfaz
    return (
        <ThemeProvider>
            <div className="container mx-auto px-4">
                <div>
                    <h1 style={{ fontSize: 'larger' }}>Gestión de alumnos</h1>

                    <div className='fieldSetFilters'>
                        <Select
                            placeholder="Seleccione un taller"
                            options={workshopOptions}
                        />
                    </div>
                    
                    <div className='fieldSetButtons'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buscar</button>
                    
                        <button style={{ marginLeft: '5px' }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => document.getElementById('create_person').showModal()}>Nuevo alumno</button>
                    </div>

                    {/* Tabla de personas */}
                    <div id='tblPersonas'>
                        {loadingPeople ? (
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

                    {errorPeople && <p className="text-red-500 text-center mt-4">{errorPeople}</p>}
                </div>
            </div>
            <dialog id="create_person" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Registra un nuevo alumno</h3>
                    <div>
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <div id='inputsCreate' style={{ margin: '5px auto' }}>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Nombres</span>
                                    </div>
                                    <input id='name' type="text" placeholder="Ingrese los nombres" className="input input-bordered w-full max-w-xs" 
                                    {...register("name", {
                                        required: {
                                        value: true,
                                        message: "El nombre del alumno es requerido.",
                                        },
                                    })}/>
                                    {errors.name && (
                                    <p className="mt-2 text-red-500 text-sm">
                                        {errors.name.message}
                                    </p>
                                    )}
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Apellidos</span>
                                    </div>
                                    <input id='lastname' type="text" placeholder="Ingrese los apellidos" className="input input-bordered w-full max-w-xs" 
                                        {...register("lastname", {
                                            required: {
                                                value: true,
                                                message: "El apellido del alumno es requerido.",
                                            },
                                        })}
                                    />
                                    {errors.lastname && (
                                    <p className="mt-2 text-red-500 text-sm">
                                        {errors.lastname.message}
                                    </p>
                                    )}
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Nro. de contacto</span>
                                    </div>
                                    <input id='phone_number' type="number" placeholder="Ingrese el teléfono o celular" className="input input-bordered w-full max-w-xs"
                                        {...register("phone_number", {
                                            required: {
                                                value: true,
                                                message: "El número del alumno es requerido.",
                                            },
                                        })}
                                    />
                                    {errors.phone_number && (
                                    <p className="mt-2 text-red-500 text-sm">
                                        {errors.phone_number.message}
                                    </p>
                                    )}
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Correo electrónico</span>
                                    </div>
                                    <input id='email' type="email" placeholder="Ingrese el email" className="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "El email del alumno es requerido.",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                    <p className="mt-2 text-red-500 text-sm">
                                        {errors.email.message}
                                    </p>
                                    )}
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Nivel de educación</span>
                                    </div>
                                    <select 
                                        id='user_type'
                                        className="select select-bordered"
                                        {...register("user_type", {
                                            required: {
                                                value: true,
                                                message: "El nivel de educación del alumno es requerido.",
                                            },
                                        })}
                                    >
                                        <option disabled value="">Seleccione el tipo</option>
                                        <option value={'student'}>Estudiante</option>
                                        <option value={'professional'}>Profesional</option>
                                    </select>
                                    {errors.user_type && (
                                    <p className="mt-2 text-red-500 text-sm">
                                        {errors.user_type.message}
                                    </p>
                                    )}
                                </label>
                            </div>

                            {/* if there is a button in form, it will close the modal */}

                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
                                {/* <button className="btn btn-error">Cancelar</button> */}
                                <button type="button" className="btn btn-success">Guardar</button>
                            </div>
                            {errorCreatePerson && <div className="mt-3 text-red-500 text-base">{errorCreatePerson}</div>}
                        </form>
                    </div>
                </div>
            </dialog>
        </ThemeProvider>
    );
};

export default PeoplePage;
