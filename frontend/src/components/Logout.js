import { Link } from "react-router-dom";

function Logout({ inActiveClass, logout }) {
    return (
        <div>
            <Link className={inActiveClass} onClick={logout}>
                Logout
            </Link>
        </div>
    );
}

export default Logout;
