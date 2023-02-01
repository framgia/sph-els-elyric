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
export async function addCategory(title, description) {
  const response = await adminInstance.post("/categories/add", {
    title,
    description,
  });

  return response.data;
}

export async function getCategories() {
  try {
    const response = await adminInstance.get("/categories");
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
}
export async function getCategoryData(categoryID) {
  try {
    const response = await adminInstance.get(`category/${categoryID}`);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
}
export async function updateCategoryData(categoryID, data) {
  try {
    const response = await adminInstance.put(
      `categories/${categoryID}/edit`,
      data
    );
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
}
export async function addQuestionToCategory(categoryID, data) {
  try {
    const response = await adminInstance.post(
      `categories/${categoryID}/question/add`,
      data
    );
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
}

export async function deleteCategory(categoryID) {
  const response = await adminInstance.delete(
    `categories/${categoryID}/delete`
  );

  return response.data;
}
