import { useCallback, useState } from "react";

export function usePeople() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [people, setPeople] = useState([]);

    const getAllPeople = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const people = ["Melvin", "Pedro", "Jorge"];

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

    return { people: people, getAll, loading, error };
}
