import React from 'react';
import CustomTable from '../../../core/components/CustomTable.component.jsx';


const WorkshopPage = () => {
    const headers = ['Product name', 'Color', 'Category', 'Price'];
    const data = [
        { id: 1, product_name: "Apple MacBook Pro 17\"", color: "Silver", category: "Laptop", price: "$2999" },
        { id: 2, product_name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
        { id: 3, product_name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
        { id: 4, product_name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
        { id: 5, product_name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
        { id: 6, product_name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
        { id: 7, product_name: "Apple MacBook Pro 17\"", color: "Silver", category: "Laptop", price: "$2999" },
        { id: 8, product_name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
        { id: 9, product_name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
        { id: 10, product_name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
        { id: 11, product_name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
        { id: 12, product_name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
        { id: 13, product_name: "Apple MacBook Pro 17\"", color: "Silver", category: "Laptop", price: "$2999" },
        { id: 14, product_name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
        { id: 15, product_name: "Magic Mouse 21", color: "Black", category: "Accessories", price: "$99" },
        { id: 16, product_name: "Magic Mouse 22", color: "Black", category: "Accessories", price: "$99" },
        { id: 17, product_name: "Magic Mouse 232", color: "Black", category: "Accessories", price: "$99" },
        { id: 18, product_name: "Magic Mouse 232", color: "Black", category: "Accessories", price: "$99" },
        { id: 19, product_name: "Apple MacBook Pro 117\"", color: "Silver", category: "Laptop", price: "$2999" },
        { id: 20, product_name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
        { id: 21, product_name: "Magic Mouse 123", color: "Black", category: "Accessories", price: "$99" },
        { id: 22, product_name: "Magic Mouse 9", color: "Black", category: "Accessories", price: "$99" },
        { id: 23, product_name: "Magic Mouse 1", color: "Black", category: "Accessories", price: "$99" },
        { id: 24, product_name: "Magic Mouse 4", color: "Black", category: "Accessories", price: "$99" },
    ];

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
            <div>Workshop Page</div>
            <CustomTable
                headers={headers}
                data={data}
                totalItems={data.length}
                itemsPerPageParam={10}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
        </>
    );
};

export default WorkshopPage;