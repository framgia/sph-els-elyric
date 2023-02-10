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

export async function getUserCategories() {
  try {
    const response = await userInstance.get("/categories");
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
}

export async function getUserCategory(categoryId) {
  try {
    const response = await userInstance.get(`/categories/${categoryId}`);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
}

export async function showLearnedWord(userId) {
  const response = await userInstance.get(`learned-word/${userId}`);

  return response.data;
}

export async function storeLearnedWord(data) {
  const response = await userInstance.post("learned-word/", data);

  return response.data;
}

export async function getUser() {
  const response = await userInstance.get(`user`);

  return response;
}

export async function viewUserProfile(userId) {
  const response = await userInstance.get(`profile/${userId}`);

  return response;
}

export async function calculateScore(data) {
  const response = await userInstance.post("/totalscore", data);

  return response.data;
}

export async function getSelfActivity() {
  const response = await userInstance.get("/activities");

  return response;
}

export async function getTakenCategory() {
  const response = await userInstance.get("/taken_category");

  return response;
}

export async function followUser(userId, follow) {
  const response = await userInstance.post(`/follow/${userId}`, follow);

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
  const response = await adminInstance.post("/categories", {
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
export async function getCategoryData(categoryId) {
  try {
    const response = await adminInstance.get(`categories/${categoryId}`);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
}
export async function updateCategoryData(categoryId, data) {
  try {
    const response = await adminInstance.put(`categories/${categoryId}`, data);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
}
export async function addQuestionToCategory(categoryId, data) {
  try {
    const response = await adminInstance.post(`questions/${categoryId}/`, data);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
}

export async function deleteCategory(categoryId) {
  const response = await adminInstance.delete(`categories/${categoryId}`);

  return response.data;
}
