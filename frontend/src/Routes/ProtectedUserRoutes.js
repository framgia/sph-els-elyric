import { Outlet, Navigate } from "react-router-dom";
import useUserAuth from "../hooks/useLocalStorage";

const ProtectedUserRoutes = () => {
  const UserIsLoggedIn = useUserAuth();

  return UserIsLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedUserRoutes;
