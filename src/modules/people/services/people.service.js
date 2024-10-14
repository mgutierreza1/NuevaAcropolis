const API_URL = "http://127.0.0.1:8000/users/";

export const getAllPeople = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    return json?.map((data) => ({
      id: data.id,
      full_name: data.name + ' ' + data.lastname,
      phone_number: data.phone_number,
      email: data.email,
      user_type: data.user_type,
      created_at: data.created_at
    }));
  } catch (e) {
    throw new Error("Error to get people");
  }
};

export const savePerson = async ({ name, lastname, phone_number, email, user_type }) => {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        lastname: lastname,
        phone_number: phone_number,
        email: email,
        user_type: user_type
      }),
    });
  } catch (e) {
    throw new Error("Error to save person");
  }
};