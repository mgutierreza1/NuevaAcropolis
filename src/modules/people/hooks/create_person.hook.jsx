import { useCallback, useState } from "react";
import { savePerson } from "../services/people.service.js";

export function useSavePerson() {
    const [errorCreatePerson, setError] = useState(null);
    const [loadingCreatePerson, setLoading] = useState(false);

    const savePersona = useCallback(async ({ name, lastname, phone_number, email, user_type }) => {
        setLoading(true);
        setError(null);
        try {
            const result = await savePerson({ name, lastname, phone_number, email, user_type });
            setLoading(false);
            return result;
        } catch (e) {
            setError(e.message);
            setLoading(false);
            throw e;
        }
    }, []);

    return { savePersona, loadingCreatePerson, errorCreatePerson };
}