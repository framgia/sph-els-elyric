import { Outlet, Navigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const ProtectedAdminRoutes = () => {
  let { IsAdmin } = useLocalStorage();

  return IsAdmin ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedAdminRoutes;
