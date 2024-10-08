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
            setSelectedItems([]);
        } else {
            const currentItemsIds = currentItems.map((item) => item.id);
            setSelectedItems(currentItemsIds);
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

    const handleDelete = (item) => {
        if (onDelete && selectedItems.includes(item.id)) {
            onDelete(item);
        }
    };

    const handleEdit = (item) => {
        if (onEdit && selectedItems.includes(item.id)) {
            onEdit(item);
        }
    };

    return (
        <div className="">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                    className="checkbox"
                                />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">#</th>
                        {headers.map((header, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {header}
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, rowIndex) => (
                        <tr key={rowIndex} className="text-gray-800">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input
                                        id={`checkbox-table-search-${rowIndex}`}
                                        type="checkbox"
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleSelectItem(item.id)}
                                        className="checkbox"
                                    />
                                    <label htmlFor={`checkbox-table-search-${rowIndex}`} className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td className="px-6 py-4">{indexOfFirstItem + rowIndex + 1}</td>
                            {headers.map((header, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">
                                    {item[header.toLowerCase().replace(/\s+/g, '_')]}
                                </td>
                            ))}
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => handleEdit(item)}
                                    className={`font-medium btn ${selectedItems.includes(item.id)
                                        ? 'btn-info'
                                        : 'btn-outline btn-info text-info-content bg-transparent'
                                        }`}
                                    disabled={!selectedItems.includes(item.id)}
                                >
                                    Editar
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => handleDelete(item)}
                                    className={`font-medium btn ${selectedItems.includes(item.id)
                                        ? 'btn-error'
                                        : 'btn-outline btn-error text-error-content bg-transparen'
                                        }`}
                                    disabled={!selectedItems.includes(item.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-end items-center py-4 px-6">
                <div className="join">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="join-item btn"
                    >
                        «
                    </button>
                    <button className="join-item">Página {currentPage}</button>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="join-item btn"
                    >
                        »
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomTable;