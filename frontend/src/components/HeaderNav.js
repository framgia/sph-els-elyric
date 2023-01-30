import { Link } from "react-router-dom";
import { useNavbar } from "../hooks/useNavbar";
import UserLogout from "./userLogout";
import AdminLogout from "./adminLogout";
import useLocalStorage from "../hooks/useLocalStorage";

export default function HeaderNav() {
  const { IsAdmin } = useLocalStorage();
  const { currentRoute, navigateTo } = useNavbar();

  const inActiveClass =
    "text-gray-50 hover:text-gray-100 text-lg font-semibold hover:underline";
  const activeClass =
    "text-blue-900 hover:text-gray-100 text-lg font-semibold underline";

  return (
    <div className="flex items-center">
      <Link to="/">
        <h1 className="text-2xl font-semibold">E-learning System</h1>
      </Link>
      <div className="flex gap-5 ml-auto">
        {!IsAdmin && (
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
        {IsAdmin && (
          <Link
            to="/admin/categories"
            className={
              currentRoute === "/admin/categories" ? activeClass : inActiveClass
            }
            onClick={() => navigateTo("categories")}
          >
            Categories
          </Link>
        )}
        {!IsAdmin && (
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
        {!IsAdmin && <UserLogout inActiveClass={inActiveClass} />}
        {IsAdmin && <AdminLogout inActiveClass={inActiveClass} />}
      </div>
    </div>
  );
}
