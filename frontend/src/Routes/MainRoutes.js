import { Route, Routes, Navigate } from "react-router-dom";
import UserRegistrationPage from "../pages/user/UserRegistrationPage";
import CategoriesPage from "../pages/user/UserCategoriesPage";
import UserLoginPage from "../pages/user/UserLoginPage";
import UserDashboardPage from "../pages/user/UserDashboardPage";
import AdminLoginPage from "../pages/admin/AdminLoginPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import ProtectedUserRoutes from "./ProtectedUserRoutes";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";

export default function MainRoutes({ isAuth, isAdmin, setIsAdmin }) {
    console.log("MainisAuth: ", isAuth);
    return (
        <div>
            <Routes className="mx-20">
                {isAuth && (
                    <>
                        {/* ADMIN ROUTE  */}
                        <Route
                            path="admin/login"
                            element={
                                <AdminLoginPage
                                    isAdmin={isAdmin}
                                    setIsAdmin={setIsAdmin}
                                />
                            }
                        />
                    </>
                )}

                {/* USER ROUTE  */}
                <Route path="/register" element={<UserRegistrationPage />} />
                <Route path="/login" element={<UserLoginPage />} />

                {isAuth && (
                    <>
                        {/* PROTECTED ADMIN ROUTES  */}
                        <Route element={<ProtectedAdminRoutes />}>
                            <Route
                                path="/admin/dashboard"
                                element={<AdminDashboardPage isAuth={isAuth} />}
                            />
                        </Route>

                        {/* PROTECTED USER ROUTES  */}
                        <Route element={<ProtectedUserRoutes />}>
                            <Route
                                path="/dashboard"
                                element={<UserDashboardPage />}
                            />
                            <Route
                                path="/categories"
                                element={<CategoriesPage />}
                            />
                        </Route>
                    </>
                )}
                <Route path="*" element={<Navigate to={"/login"} />} />
            </Routes>
        </div>
    );
}
