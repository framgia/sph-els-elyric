import { Route, Routes } from "react-router-dom";
import UserRegistrationPage from "../pages/user/UserRegistrationPage";
import CategoriesPage from "../pages/user/UserCategoriesPage";
import UserLoginPage from "../pages/user/UserLoginPage";
import UserDashboardPage from "../pages/user/UserDashboardPage";
import AdminLoginPage from "../pages/admin/AdminLoginPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AdminCategoriesPage from "../pages/admin/AdminCategoriesPage";
import ProtectedUserRoutes from "./ProtectedUserRoutes";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";

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
                    <Route
                        path="/admin/dashboard"
                        element={<AdminDashboardPage />}
                    />
                    <Route
                        path="/admin/categories"
                        element={<AdminCategoriesPage />}
                    />
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
