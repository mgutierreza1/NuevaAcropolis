import { React, useEffect } from 'react';
import CustomTable from '../../../core/components/CustomTable.component.jsx';
import { useWorkshops } from '../hooks/userWorkshop.hook.jsx';

const WorkshopContainer = () => {
    const { workshops, getAll, laoding, error } = useWorkshops();
    const headers = ['name', 'description'];

    useEffect(() => {
        getAll();
    }, [getAll]);

    const handleDelete = (item) => {
        console.log("Item eliminado:", item);
        // Aquí puedes agregar la lógica para eliminar el item
    };

    const handleEdit = (item) => {
        console.log("Item editado:", item);
        // Aquí puedes agregar la lógica para editar el item
    };

    return (
        <>
            <button
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
                Registrar nuevo Taller
            </button>
            {
                laoding ?
                    <p>Cargando...</p>
                    :
                    <CustomTable
                        headers={headers}
                        data={workshops}
                        totalItems={workshops.length}
                        itemsPerPageParam={10}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
            }
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
};

export default WorkshopContainer;
