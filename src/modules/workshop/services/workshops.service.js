const API_URL = "http://127.0.0.1:8000/workshops/";

export const getAllWorkshops = async () => {
    try {
        const response = await fetch(API_URL, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        return json?.map(
            data => ({
                id: data.id,
                name: data.name,
                description: data.description,
            }));
    } catch (e) {
        throw new Error("Error to get workshops");
    }
}

export const saveWorkshops = async ({ name, description }) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                description: description,
            })
        });

    } catch (e) {
        throw new Error("Error to get workshops");
    }
}