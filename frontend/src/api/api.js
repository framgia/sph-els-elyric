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

export async function logout() {
    const token = localStorage.getItem("token");
    const response = await userInstance.get("/logout", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    window.location.replace = "/login";

    console.log(response.data);
}

export async function checkAuthUser() {
    const token = localStorage.getItem("token");
    const response = await userInstance.get("/auth/check", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
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
