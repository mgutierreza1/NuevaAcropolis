import React, { useState, useEffect } from 'react';

const CustomTable = ({ headers, data, totalItems, itemsPerPageParam, onDelete, onEdit }) => {
    const itemsPerPage = itemsPerPageParam || 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSelectAll = () => {
        if (selectAll) {
            const currentItemsIds = currentItems.map((item) => item.id);
            setSelectedItems(selectedItems.filter((id) => !currentItemsIds.includes(id)));
        } else {
            const currentItemsIds = currentItems.map((item) => item.id);
            setSelectedItems([...selectedItems, ...currentItemsIds]);
        }
        setSelectAll(!selectAll);
    };

    const handleSelectItem = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    useEffect(() => {
        const currentItemsIds = currentItems.map((item) => item.id);
        const allSelected = currentItemsIds.every((id) => selectedItems.includes(id));

        setSelectAll(allSelected);
    }, [currentItems, selectedItems]);

    // Función para manejar la eliminación
    const handleDelete = (item) => {
        if (onDelete) {
            onDelete(item); // Llamar al callback de eliminación con el item seleccionado
        }
    };

    // Función para manejar la eliminación
    const handleEdit = (item) => {
        if (onEdit) {
            onEdit(item); // Llamar al callback de eliminación con el item seleccionado
        }
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen">
            <div className="pb-4 bg-white dark:bg-gray-900">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        {
                            headers.map((header, index) => (
                                <th key={index} scope="col" className="px-6 py-3">
                                    {header}
                                </th>
                            ))
                        }
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems.map((item, rowIndex) => (
                            <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input
                                            id={`checkbox-table-search-${rowIndex}`}
                                            type="checkbox"
                                            checked={selectedItems.includes(item.id)}
                                            onChange={() => handleSelectItem(item.id)}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor={`checkbox-table-search-${rowIndex}`} className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                {
                                    headers.map((header, colIndex) => (
                                        <td key={colIndex} className={colIndex === 0 ? "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" : "px-6 py-4"}>
                                            {item[header.toLowerCase().replace(/\s+/g, '_')]}
                                        </td>
                                    ))
                                }
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleEdit(item)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Editar
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* Footer con controles de paginación */}
            <div className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-900">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    Página {currentPage} de {totalPages} ({totalItems} elementos en total)
                </div>
                <div>
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 mx-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                    >
                        Anterior
                    </button>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 mx-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomTable;
