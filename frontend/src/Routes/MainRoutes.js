import { Route, Routes } from "react-router-dom";
import UserRegistrationPage from "../pages/user/UserRegistrationPage";
import CategoriesPage from "../pages/CategoriesPage";
import UserLoginPage from "../pages/user/UserLoginPage";
import UserDashboardPage from "../pages/user/UserDashboardPage";
import AdminLoginPage from "../pages/admin/AdminLoginPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AdminCategoriesPage from "../pages/admin/AdminCategoriesPage";
import AdminAddWordPage from "../pages/admin/AdminAddWordPage";
import AdminAddCategoryPage from "../pages/admin/AdminAddCategoryPage";
import ProtectedUserRoutes from "../Routes/ProtectedUserRoutes";
import ProtectedAdminRoutes from "../Routes/ProtectedAdminRoutes";

export default function MainRoutes() {
  return (
    <div>
      <Routes className="mx-20">
        {/* UNPROTECTED ADMIN ROUTE  */}
        <Route path="admin/login" element={<AdminLoginPage />} />

        {/* UNPROTECTED USER ROUTE  */}
        <Route path="/register" element={<UserRegistrationPage />} />
        <Route path="/login" element={<UserLoginPage />} />

        {/* PROTECTED ADMIN ROUTES  */}
        <Route element={<ProtectedAdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/categories" element={<AdminCategoriesPage />} />
          <Route
            path="/admin/categories/add"
            element={<AdminAddCategoryPage />}
          />
          <Route path="/admin/words/add" element={<AdminAddWordPage />} />
        </Route>

        {/* PROTECTED USER ROUTES  */}
        <Route element={<ProtectedUserRoutes />}>
          <Route path="/dashboard" element={<UserDashboardPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Route>
        {/* <Route path="*" element={<Navigate to={"/login"} />} /> */}
      </Routes>
    </div>
  );
}
