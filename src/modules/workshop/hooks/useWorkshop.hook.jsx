import { useCallback, useState } from "react";
import { getAllWorkshops } from "../services/workshops.service.js";


export function useWorkshops() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [workshops, setWorkshops] = useState([]);

    const getAll = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const workshops = await getAllWorkshops();

            setWorkshops(workshops);

            if (!response.ok) {
                throw new Error("Failed to fetch projects");
            }

            return await response.json();
        } catch (e) {
            setError(e.message);
        }
        finally {
            setLoading(false);
        }
    },
        []);

    return { workshops: workshops, getAll, loading, error };
}
