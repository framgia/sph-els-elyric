import React, { useState, useEffect } from "react";
import {
  updateEmailAdmin,
  updatePasswordAdmin,
  updateDetailsAdmin,
  updateAvatarAdmin,
  getUserAdmin,
} from "../../api/api";
import { useParams, Link } from "react-router-dom";
import { useToast } from "../../hooks/useToast";

export default function UserProfileEditPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [password, setPassword] = useState("");
  const [rerender, setRerender] = useState(false);
  const userId = useParams();
  const { showToast } = useToast();

  useEffect(() => {
    const fetchUser = async () => {
      const current = await getUserAdmin(userId.userId);
      setName(current.data.data.name);
      setEmail(current.data.data.email);
      setProfilePicture(current.data.data.profile_picture);
      setPassword(current.data.data.password);
    };

    fetchUser();
    setRerender(false);
  }, [rerender]);
  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const user = await getUserAdmin(userId.userId);

      if (user.data.data.name !== name) {
        const response = await updateDetailsAdmin(userId.userId, { name });
        showToast("success", response.message);
      }
      if (user.data.data.email !== email) {
        const response = await updateEmailAdmin(userId.userId, { email });
        showToast("success", response.message);
      }
      if (user.data.data.password !== password) {
        const response = await updatePasswordAdmin(userId.userId, { password });
        showToast("success", response.message);
      }
      if (user.data.data.profile_picture !== profilePicture) {
        const response = await updateAvatarAdmin(userId.userId, {
          profile_picture: profilePicture,
        });
        showToast("success", response.message);
      }

      setName("");
      setEmail("");
      setProfilePicture("");
      setPassword("");
      setRerender(true);
    } catch (error) {
      console.log(error);
    }
  };
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
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500"
            id="firstName"
            value={name}
            type="text"
            placeholder="First Name"
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
            value={email}
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
            value={profilePicture}
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
            type="text"
            placeholder="Password"
          />
          <p className="text-gray-50 text-sm italic">
            Make sure it's at least 8 characters including a number and a
            symbol.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-out transition duration-150 ease-in-out"
          >
            Save Changes
          </button>
          <Link
            to="/admin/dashboard"
            className="bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-out transition duration-150 ease-in-out"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
