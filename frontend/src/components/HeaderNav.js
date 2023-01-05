import { Link } from "react-router-dom";

export default function HeaderNav() {
    return (
        <div className="flex items-center">
            <Link to="/">
                <h1 className="text-2xl font-semibold">E-learning System</h1>
            </Link>
            <div className="flex gap-5 ml-auto">
                <Link
                    to="/categories"
                    className="text-gray-50 hover:text-gray-100 text-lg font-semibold no-underline hover:underline"
                >
                    Categories
                </Link>
                <Link
                    to="/login"
                    className="text-gray-50 hover:text-gray-100 text-lg font-semibold no-underline hover:underline"
                >
                    Signin
                </Link>
                <Link
                    to="/register"
                    className="text-gray-50 hover:text-gray-100 text-lg font-semibold no-underline hover:underline decoration-white"
                >
                    Signup
                </Link>
            </div>
        </div>
    );
}
