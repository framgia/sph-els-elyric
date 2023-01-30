import { Link } from "react-router-dom";
import { userLogout } from "../api/api";

function useUserLogout({ inActiveClass }) {
  const handleLogout = async () => {
    await userLogout();

    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    window.location.href = "/login";
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
