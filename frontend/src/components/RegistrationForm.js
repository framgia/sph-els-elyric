import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegistrationForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	async function signUp(event) {
		event.preventDefault();
		let userData = { name, email, password };

		let result = await fetch("http://127.0.0.1:8000/api/register", {
			method: "POST",
			body: JSON.stringify(userData),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});

		result = await result.json();
		console.log(result);
	}

	return (
		<form
			onSubmit={signUp}
			autoComplete="off"
			className="w-full max-w-[450px] px-10 py-16 bg-white border border-gray-100 rounded-lg shadow-lg"
			aria-label="signup-form"
		>
			<h2 className="mb-10 text-3xl font-bold text-center">
				Signup Account
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
			<div className="flex flex-col items-start mb-10 gap-y-3">
				<label
					htmlFor="confirm_password"
					className="text-md font-medium"
				>
					Confirm Password
				</label>
				<input
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					id="confirm_password"
					type="password"
					className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
					placeholder="Retype your password"
				/>
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
