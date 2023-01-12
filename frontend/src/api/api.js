import { instance } from "./instance";

export async function register(name, email, password, password_confirmation) {
    const response = await instance.post("/register", {
        name,
        email,
        password,
        password_confirmation,
    });

    return response.data.message;
}
