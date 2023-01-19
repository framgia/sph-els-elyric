import { Link } from "react-router-dom";
import { userLogout } from "../api/api";

function useUserLogout({ inActiveClass }) {
    const handleLogout = async () => {
        await userLogout();
    };
    return (
        <div>
            <Link className={inActiveClass} onClick={handleLogout}>
                Logout
            </Link>
        </div>
    );
}

export default useUserLogout;
