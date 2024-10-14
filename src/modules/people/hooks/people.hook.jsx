import { useCallback, useState } from "react";
import { getAllPeople } from "../services/people.service.js";

export function usePeople() {
    const [errorPeople, setError] = useState(null);
    const [loadingPeople, setLoading] = useState(false);
    const [people, setPeople] = useState([]);

    const getAllPersonas = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const people = await getAllPeople();

            setPeople(people);

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

    return { people: people, getAllPersonas, loadingPeople, errorPeople };
}

