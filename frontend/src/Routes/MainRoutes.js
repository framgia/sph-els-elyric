import { Route, Routes } from "react-router-dom";
import UserRegistrationPage from "../pages/user/UserRegistrationPage";
import UserCategoriesPage from "../pages/user/UserCategoriesPage";
import UserLoginPage from "../pages/user/UserLoginPage";
import UserDashboardPage from "../pages/user/UserDashboardPage";
import UserAnswerPage from "../pages/user/UserAnswerPage";
import UserWordsLearned from "../pages/user/UserWordsLearned";
import AdminLoginPage from "../pages/admin/AdminLoginPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AdminCategoriesPage from "../pages/admin/AdminCategoriesPage";
import AdminAddWordPage from "../pages/admin/AdminAddWordPage";
import AdminAddCategoryPage from "../pages/admin/AdminAddCategoryPage";
import ProtectedUserRoutes from "./ProtectedUserRoutes";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";
import UserProfilePage from "../pages/user/UserProfilePage";
import UserProfileViewPage from "../pages/user/UserProfileViewPage";

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
          <Route
            path="/admin/categories/:categoryId/add"
            element={<AdminAddWordPage />}
          />
          <Route
            path="/admin/categories/:categoryId/edit"
            element={<AdminCategoriesPage />}
          />
        </Route>

        {/* PROTECTED USER ROUTES  */}
        <Route element={<ProtectedUserRoutes />}>
          <Route path="/" element={<UserDashboardPage />} />
          <Route path="/dashboard" element={<UserDashboardPage />} />
          <Route path="/categories" element={<UserCategoriesPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/profile/:userId" element={<UserProfileViewPage />} />
          <Route path="/words-learned" element={<UserWordsLearned />} />
          <Route
            path="/categories/:categoryId/answer"
            element={<UserAnswerPage />}
          />
        </Route>
        {/* <Route path="*" element={<Navigate to={"/login"} />} /> */}
      </Routes>
    </div>
  );
}
