import React, { useState } from "react";

export default function UserProfileEditPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [password, setPassword] = useState("");

  console.log(firstName, lastName, email, profilePicture, password);
  return (
    <div className="w-full max-w-sm mx-auto my-10">
      <h1 className="text-3xl font-bold py-5">Edit Profile</h1>
      <form className="bg-gradient-to-b from-[#617EFF] to-[#34B3F9] px-10 pt-8 pb-8 mb-4 rounded-xl border border-blue-600 shadow-xl">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500"
            id="firstName"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500"
            id="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="profilePicture"
          >
            Profile Picture (image link)
          </label>
          <input
            onChange={(e) => setProfilePicture(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500"
            id="profilePicture"
            type="text"
            placeholder="Profile Picture URL"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border-blue-500"
            id="password"
            type="password"
            placeholder="Password"
          />
          <p className="text-gray-50 text-sm italic">
            Make sure it's at least 8 characters including a number and a
            symbol.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-out transition duration-150 ease-in-out">
            Save Changes
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-out transition duration-150 ease-in-out">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
