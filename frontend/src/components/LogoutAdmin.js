import { Link } from "react-router-dom";
import { adminLogout } from "../api/api";

function LogoutAdmin({ inActiveClass }) {
    const handleLogout = async () => {
        await adminLogout();

        localStorage.removeItem("admin_token");
        localStorage.removeItem("isAdmin");
        window.location.href = "/admin/login";
    };
    return (
        <div>
            <Link className={inActiveClass} onClick={handleLogout}>
                Logout
            </Link>
        </div>
    );
}

export default LogoutAdmin;
