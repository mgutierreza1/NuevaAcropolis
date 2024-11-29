import { useState } from "react";
import { deleteWorkshopService } from "../services/workshops.service";
import { useCallback } from "react";

export function useDeleteWorkshop() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const deleteWorkshop = useCallback(async ({ id }) => {
        setLoading(true);
        setError(null);
        try {
            await deleteWorkshopService({ id });
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
            throw e;
        }
    }, []);

    return { deleteWorkshop, loading, error };
}