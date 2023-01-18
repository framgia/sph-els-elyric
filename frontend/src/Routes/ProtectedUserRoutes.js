import { Outlet, Navigate } from "react-router-dom";
import useUserAuth from "../hooks/useUserAuth";

const ProtectedUserRoutes = () => {
    const isUserAuth = useUserAuth();
    return isUserAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedUserRoutes;
