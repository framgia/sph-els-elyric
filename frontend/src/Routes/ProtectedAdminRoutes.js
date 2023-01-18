import { Outlet, Navigate } from "react-router-dom";
import useUserAuth from "../hooks/useUserAuth";

const ProtectedAdminRoutes = () => {
    const isAdminAuth = useUserAuth();
    return isAdminAuth ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedAdminRoutes;
