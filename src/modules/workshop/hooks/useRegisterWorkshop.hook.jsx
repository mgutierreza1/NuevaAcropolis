import { useCallback, useState } from "react";
import { saveWorkshops } from "../services/workshops.service";


export function useRegisterWorkshop() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const saveWorkshop = useCallback(async ({ name, description }) => {
        setLoading(true);
        setError(null);
        try {
            const result = await saveWorkshops({ name, description });
            setLoading(false);
            return result;
        } catch (e) {
            setError(e.message);
            setLoading(false);
            throw e;
        }
    }, []);

    return { saveWorkshop, loading, error };
}