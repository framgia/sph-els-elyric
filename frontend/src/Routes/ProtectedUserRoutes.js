import { Outlet, Navigate } from "react-router-dom";
import useUserAuth from "../hooks/useIsUser";

const ProtectedUserRoutes = () => {
    const UserIsLoggedIn = useUserAuth();

    return UserIsLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedUserRoutes;
