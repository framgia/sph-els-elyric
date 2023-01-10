import axios from "axios";

export async function register(name, email, password, confirmPassword) {
    const response = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
        confirmPassword,
    });

    return response.data.message;
}
