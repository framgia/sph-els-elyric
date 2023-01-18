import { Link } from "react-router-dom";
import { useNavbar } from "../hooks/useNavbar";
import Logout from "./Logout";

export default function HeaderNav({ isAuth }) {
    const { currentRoute, navigateTo } = useNavbar();

    const handleLogout = () => {
        localStorage.clear();
        navigateTo("admin/login");
    };
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
                {isAuth && (
                    <Link
                        to="/categories"
                        className={
                            currentRoute === "categories"
                                ? activeClass
                                : inActiveClass
                        }
                        onClick={() => navigateTo("categories")}
                    >
                        Categories
                    </Link>
                )}
                <Link
                    to="/login"
                    className={
                        currentRoute === "login" ? activeClass : inActiveClass
                    }
                    onClick={() => navigateTo("login")}
                >
                    Signin
                </Link>

                {isAuth && (
                    <Logout
                        logout={handleLogout}
                        inActiveClass={inActiveClass}
                    />
                )}

                <Link
                    to="/register"
                    className={
                        currentRoute === "register"
                            ? activeClass
                            : inActiveClass
                    }
                    onClick={() => navigateTo("register")}
                >
                    Signup
                </Link>
            </div>
        </div>
    );
}
