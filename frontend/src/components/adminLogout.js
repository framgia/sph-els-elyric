import { Link } from "react-router-dom";
import { adminLogout } from "../api/api";

function useAdminLogout({ inActiveClass }) {
    const handleLogout = async () => {
        await adminLogout();
    };
    return (
        <div>
            <Link className={inActiveClass} onClick={handleLogout}>
                Logout
            </Link>
        </div>
    );
}

export default useAdminLogout;
