import { Outlet, Navigate } from "react-router-dom";
import useIsAdmin from "../hooks/useIsAdmin";

const ProtectedAdminRoutes = () => {
    let AdminIsLoggedIn = useIsAdmin();

    return AdminIsLoggedIn ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedAdminRoutes;
