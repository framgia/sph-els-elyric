import { Link } from "react-router-dom";
import { useNavbar } from "../hooks/useNavbar";
import UserLogout from "./userLogout";
import AdminLogout from "./LogoutAdmin";
import useLocalStorage from "../hooks/useLocalStorage";
import { getUser, getUserAdmin } from "../api/api";
import { useEffect, useState } from "react";

export default function HeaderNav() {
  const { IsAdmin, IsUser } = useLocalStorage();
  const { currentRoute, navigateTo } = useNavbar();
  const [user, setUser] = useState([]);

  const isAdmin = IsAdmin();
  const isUser = IsUser();

  useEffect(() => {
    const fetch = async () => {
      if (isUser) {
        const response = await getUser();
        setUser(response.data.data);
      }
      if (isAdmin) {
        const response = await getUserAdmin();
        setUser(response.data.data);
      }
    };
    fetch();
  }, []);

  const inActiveClass =
    "text-gray-50 hover:text-gray-100 text-lg font-semibold hover:underline";
  const activeClass =
    "text-blue-900 hover:text-gray-100 text-lg font-semibold underline";

  return (
    <div className="flex items-center">
      <Link to="/">
        <h1 className="text-2xl font-semibold">E-learning System</h1>
      </Link>
      <div className="flex items-center gap-5 ml-auto">
        {isUser && (
          <Link
            to="/categories"
            className={
              currentRoute === "categories" ? activeClass : inActiveClass
            }
            onClick={() => navigateTo("categories")}
          >
            Categories
          </Link>
        )}
        {isAdmin && (
          <>
            <Link
              to="/admin/dashboard"
              className={
                currentRoute === "/admin/dashboard"
                  ? activeClass
                  : inActiveClass
              }
              onClick={() => navigateTo("/admin/dashboard")}
            >
              Dashboard
            </Link>
            <Link
              to="/admin/categories"
              className={
                currentRoute === "/admin/categories"
                  ? activeClass
                  : inActiveClass
              }
              onClick={() => navigateTo("categories")}
            >
              Categories
            </Link>
          </>
        )}
        {!isUser && !isAdmin && (
          <>
            <Link
              to="/login"
              className={currentRoute === "login" ? activeClass : inActiveClass}
              onClick={() => navigateTo("login")}
            >
              Signin
            </Link>
            <Link
              to="/register"
              className={
                currentRoute === "register" ? activeClass : inActiveClass
              }
              onClick={() => navigateTo("register")}
            >
              Signup
            </Link>
          </>
        )}
        {isUser && <UserLogout inActiveClass={inActiveClass} />}
        {isAdmin && <AdminLogout inActiveClass={inActiveClass} />}
        {isUser && (
          <div className="flex items-end justify-center w-20 h-20 bg-gray-200 border-2 border-blue-700 rounded-full overflow-hidden cursor-pointer">
            <Link to="/profile">
              <img src={user.profile_picture} width={60} height={60} />
            </Link>
          </div>
        )}
      </div>
      <div className=""></div>
    </div>
  );
}
