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
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        window.location.href = "/login";

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function checkAuthUser() {
    const token = localStorage.getItem("token");
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
        localStorage.removeItem("admin_token");
        localStorage.removeItem("isAdmin");
        window.location.href = "/admin/login";

        return response.data;
    } catch (error) {
        console.log(error);
    }
}
