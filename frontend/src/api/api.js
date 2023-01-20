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

export async function loginUser(email, password) {
    const response = await userInstance.post("/login", {
        email,
        password,
    });

    return response.data;
}

export async function userLogout() {
    try {
        const response = await userInstance.get("/logout");

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function checkAuthUser() {
    const response = await userInstance.get("/auth/check");
    return response;
}

// ADMIN API

export async function loginAdmin(email, password) {
    const response = await adminInstance.post("/login", {
        email,
        password,
    });

    return response.data;
}

export async function adminLogout() {
    try {
        const response = await adminInstance.get("/logout");

        return response.data;
    } catch (error) {
        console.log(error);
    }
}
