import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../../core/components/CustomTable.component.jsx";
import { useWorkshops } from "../hooks/useWorkshop.hook.jsx";
import { useDeleteWorkshop } from "../hooks/useDeleteWorkshop.hook.jsx";

const WorkshopContainer = () => {
  const navigate = useNavigate();
  const headers = ["name", "description"];
  const { workshops, getAll, laoding, error } = useWorkshops();
  const { deleteWorkshop, loading, errorDelete } = useDeleteWorkshop();

  useEffect(() => {
    getAll();
  }, [getAll]);

  const handleDelete = (item) => {
    const id = item.id;
    deleteWorkshop({ id }).then(() => {
      getAll();
    });
  };

  const handleEdit = (item) => {
    const id = item.id;
    navigate(
      `/workshop/update_workshop/${id}`,
      { state: item },
    );
  };

  const handleClick = () => {
    navigate("/workshop/create_workshop");
  };

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Registrar nuevo Taller
      </button>
      {laoding ? (
        <p>Cargando...</p>
      ) : (
        <CustomTable
          headers={headers}
          data={workshops}
          totalItems={workshops.length}
          itemsPerPageParam={10}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default WorkshopContainer;
