import { userInstance, adminInstance } from "./instance";

export async function registerUser(
    name,
    email,
    password,
    password_confirmation
) {
    const response = await userInstance.post("/register", {
        name,
        email,
        password,
        password_confirmation,
    });

    return response.data.message;
}
export async function registerAdmin(
    name,
    email,
    password,
    password_confirmation
) {
    const response = await adminInstance.post("/admin/register", {
        name,
        email,
        password,
        password_confirmation,
    });

    return response.data.message;
}
