import { useForm } from "react-hook-form";
import { useRegisterWorkshop } from "../hooks/useRegisterWorkshop.hook";

const CreateWorkshopContainer = () => {
  const { saveWorkshop, loading, error } = useRegisterWorkshop();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    saveWorkshop(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nombre del taller:
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("name", {
            required: {
              value: true,
              message: "El nombre del taller es requerido.",
            },
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-xs italic">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Descripción del taller:
        </label>
        <textarea
          id="description"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("description", {
            required: {
              value: true,
              message: "La descripción del taller es requerida.",
            },
          })}
        />
        {errors.description && (
          <span className="text-red-500 text-xs italic">
            {errors.description.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {loading ? "Cargando..." : "Enviar"}
      </button>
      <div>{error ? error : ""}</div>
    </form>
  );
};

export default CreateWorkshopContainer;
