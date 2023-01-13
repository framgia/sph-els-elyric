import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "../../hooks/useToast";
import { registerUser } from "../../api/api";

export default function UserRegistrationForm() {
    const { showToast } = useToast();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!name) {
            newErrors.name = "Name is required";
        }

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        if (password_confirmation !== password) {
            newErrors.password_confirmation = "Passwords do not match";
        } else if (!password_confirmation) {
            newErrors.password_confirmation = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    async function signUp(event) {
        event.preventDefault();

        if (validateForm()) {
            try {
                const message = await registerUser(
                    name,
                    email,
                    password,
                    password_confirmation
                );

                showToast("success", message);

                setName("");
                setEmail("");
                setPassword("");
                setPassword_confirmation("");
            } catch (e) {
                showToast("error", e);
            }
        }
    }

    return (
        <form
            onSubmit={signUp}
            autoComplete="off"
            className="w-full max-w-[450px] px-10 py-16 bg-white border border-gray-100 rounded-lg shadow-lg"
            aria-label="signup-form"
        >
            <h2 className="mb-10 text-3xl font-bold text-center">
                Signup User Account
            </h2>
            <div className="flex flex-col items-start mb-5 gap-y-3">
                <label htmlFor="name" className="text-md font-medium">
                    Name
                </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    type="text"
                    className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                    placeholder="Enter your Name..."
                />
                {errors.name && (
                    <p className="text-md text-red-500">{errors.name}</p>
                )}
            </div>
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
                {errors.email && (
                    <p className="text-md text-red-500">{errors.email}</p>
                )}
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
                {errors.password && (
                    <p className="text-md text-red-500">{errors.password}</p>
                )}
            </div>
            <div className="flex flex-col items-start mb-10 gap-y-3">
                <label
                    htmlFor="confirm_password"
                    className="text-md font-medium"
                >
                    Confirm Password
                </label>
                <input
                    value={password_confirmation}
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                    id="confirm_password"
                    type="password"
                    className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                    placeholder="Retype your password"
                />
                {errors.password_confirmation && (
                    <p className="text-md text-red-500">
                        {errors.password_confirmation}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-700 hover:bg-blue-500 rounded-full h-[60px]"
            >
                Register
            </button>
            <div className="flex items-center justify-center mt-5 text-slate-400">
                <p>Already have an account? &nbsp;</p>
                <Link to="/login" className="text-blue-500 underline">
                    Sign In
                </Link>
            </div>
        </form>
    );
}
