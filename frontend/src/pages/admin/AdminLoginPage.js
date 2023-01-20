import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "../../hooks/useToast";
import { loginAdmin } from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage({ isAdmin, setIsAdmin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { showToast } = useToast();
    const navigate = useNavigate();

    const handleAdminLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await loginAdmin(email, password);
            localStorage.setItem("admin_token", response.token);
            localStorage.setItem("isAdmin", true);
            showToast("success", response.message);
            navigate(response.redirect);
        } catch (e) {
            showToast("error", e);
        }
    };
    return (
        <div className="w-full h-screen grid place-items-center">
            <form
                onSubmit={handleAdminLogin}
                autoComplete="off"
                className="w-full max-w-[450px] px-10 py-16 bg-white border border-gray-100 rounded-lg shadow-lg"
                aria-label="signup-form"
            >
                <h2 className="mb-10 text-3xl font-bold text-center">
                    Login Admin Account
                </h2>

                <div className="flex flex-col items-start mb-5 gap-y-3">
                    <label htmlFor="email" className="text-md font-medium">
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        type="email"
                        className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                        placeholder="Enter your email address..."
                    />
                </div>
                <div className="flex flex-col items-start mb-5 gap-y-3">
                    <label htmlFor="password" className="text-md font-medium">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-700 hover:bg-blue-500 rounded-full h-[60px]"
                >
                    Login
                </button>
                <div className="flex items-center justify-center mt-5 text-slate-400">
                    <p>Need an Admin account? &nbsp;</p>
                    <Link
                        to="/developer"
                        className="text-blue-500 underline"
                        aria-current="page"
                    >
                        Contact Developer
                    </Link>
                </div>
            </form>
        </div>
    );
}
