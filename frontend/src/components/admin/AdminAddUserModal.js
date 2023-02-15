import React, { useState, useEffect } from "react";
import { registerUser } from "../../api/api";
import { useToast } from "../../hooks/useToast";

function AdminAddUserModal({ showModal, setShowModal, setRenderUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const { showToast } = useToast();
  const password_confirmation = password;

  const handleClose = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setPassword("");
    setProfilePicture("");
  };

  async function handleAddUser() {
    try {
      const message = await registerUser(
        name,
        email,
        password,
        password_confirmation,
        profilePicture
      );
      setRenderUser(true);
      showToast("success", message);

      setName("");
      setEmail("");
      setPassword("");
      setProfilePicture("");
      handleClose();
    } catch (e) {
      showToast("error", e);
    }
  }

  const inputClass =
    "text-blue-800 text-lg py-2 pl-2 pr-5 border-2 border-2 border-blue-700 rounded-lg shadow-lg";
  return (
    <div>
      {showModal && (
        <div className="flex flex-col items-end modal">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-2xl font-semibold">Add User</h2>
            <img
              onClick={handleClose}
              src="https://img.icons8.com/ios-filled/256/close-window.png"
              className="w-10 cursor-pointer mb-5"
            />
          </div>
          <div className="flex gap-7 modal-content cursor-pointer">
            <input
              className={inputClass}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={inputClass}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={inputClass}
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className={inputClass}
              type="text"
              placeholder="Profile Picture URL"
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
            />
            <button
              className="text-lg text-white font-semibold bg-gradient-to-b from-[#617EFF] to-[#34B3F9]  px-10 py-2 rounded-lg border shadow-lg"
              onClick={handleAddUser}
            >
              Add User
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminAddUserModal;
