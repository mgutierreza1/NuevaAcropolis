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
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-7xl p-10 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-gray-700 text-lg font-bold mb-3"
            >
              Nombre del taller
            </label>
            <input
              type="text"
              id="name"
              placeholder="Taller de psicología"
              className="w-full px-5 py-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("name", {
                required: {
                  value: true,
                  message: "El nombre del taller es requerido.",
                },
              })}
            />
            {errors.name && (
              <p className="mt-2 text-red-500 text-sm">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-8">
            <label
              htmlFor="description"
              className="block text-gray-700 text-lg font-bold mb-3"
            >
              Descripción del taller
            </label>
            <textarea
              id="description"
              placeholder="Nuevo taller de psicología..."
              className="w-full px-5 py-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={6}
              {...register("description", {
                required: {
                  value: true,
                  message: "La descripción del taller es requerida.",
                },
              })}
            />
            {errors.description && (
              <p className="mt-2 text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 text-lg rounded focus:outline-none focus:shadow-outline"
          >
            {loading ? "Cargando..." : "Enviar"}
          </button>
          {error && <div className="mt-3 text-red-500 text-base">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default CreateWorkshopContainer;
