import useLocalStorage from "../../hooks/useLocalStorage";
import { getAllUsers, deleteUser } from "../../api/api";
import { useEffect, useState } from "react";
import AdminAddUserModal from "../../components/admin/AdminAddUserModal";
import { useToast } from "../../hooks/useToast";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const { IsAdmin } = useLocalStorage();
  const [allUsers, setAllUsers] = useState([]);
  const [showOption, setShowOption] = useState({ id: null });
  const [showModal, setShowModal] = useState(false);
  const [renderUser, setRenderUser] = useState(false);
  const { showToast } = useToast();
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getAllUsers();
        setAllUsers(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
    setRenderUser(false);
  }, [renderUser]);

  const handleOptions = (data) => {
    setShowOption({ id: data });
  };
  const handleDelete = async (deleteId) => {
    const response = await deleteUser(deleteId);

    showToast("warning", response.message);
    setRenderUser(true);
  };

  if (IsAdmin) {
    return (
      <div>
        <div className="sm:w-full grid place-items-center bg-blue-100">
          <div className="w-full lg:flex lg:flex-col lg:items-center px-0 md:px-10 overflow-hidden bg-blue-200 border border-l-gray-400 border-r-gray-400 rounded-xl">
            <div className="flex items-center justify-between w-full relative bg-gradient-to-b from-[#617EFF] to-[#34B3F9] mt-20 p-2 rounded-tl-xl rounded-tr-xl border-2 border-blue-400 overflow-scroll lg:overflow-auto  scrollbar-hide">
              <h1 className="text-2xl font-bold">User Management</h1>

              {/* ADD USER MODAL  */}
              {showModal && (
                <>
                  <AdminAddUserModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setRenderUser={setRenderUser}
                  />
                </>
              )}
              {!showModal && (
                <>
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-xl text-gray-200 hover:text-white font-semibold border-2 border-gray-200 hover:border-white px-6 py-2 rounded-full shadow-xl"
                  >
                    Add User +
                  </button>
                </>
              )}
            </div>
            <div className="w-full border border-l-blue-400 border-r-blue-400 rounded-bl-lg rounded-br-lg mb-10">
              <div className="grid lg:gap-1 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
                {/* starts here  */}
                <div className="w-screen flex flex-wrap gap-5 ml-10 my-10">
                  {/* USER'S PANEL HERE  */}
                  {allUsers.map((user, i) => (
                    <div className="relative" key={i}>
                      <div className="relative flex p-5 bg-gray-100 rounded-xl shadow-xl">
                        <div className="relative p-2 flex-shrink-0 bg-gradient-to-b from-[#617EFF] to-[#34B3F9] rounded-full">
                          <img
                            src={
                              user.profile_picture === null
                                ? "https://img.icons8.com/dotty/256/test-account.png"
                                : user.profile_picture
                            }
                            style={{ maxWidth: "80px", maxHeight: "80px" }}
                          />
                        </div>
                        <div className="flex flex-col justify-center text-lg font-semibold px-10">
                          <p>{user.name}</p>
                          <p>{user.email}</p>
                        </div>
                        <div className="">
                          <p className="reltive flex justify-center text-3xl bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full cursor-pointer">
                            <span
                              onClick={() => handleOptions(user.id)}
                              className="absolute top-3"
                            >
                              ...
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* OPTION PANEL */}
                      {showOption.id === user.id && (
                        <div className="absolute top-0 right-0 w-full h-full flex p-2 bg-gray-100 rounded-xl shadow-xl">
                          <div
                            onClick={() => setShowOption({ id: null })}
                            className="absolute right-1 -top-[-5px] cursor-pointer"
                          >
                            <img
                              src="https://img.icons8.com/ios-filled/256/close-window.png"
                              className="w-10"
                            />
                          </div>
                          <div className="grid items-center justify-center w-full bg-gradient-to-b from-[#617EFF] to-[#34B3F9] rounded-lg">
                            <div
                              onClick={() => handleDelete(user.id)}
                              className="bg-red-500 hover:bg-red-400 text-gray-100 text-lg px-16 py-2 cursor-pointer rounded-full"
                            >
                              Delete
                            </div>
                            <Link
                              to={`/admin/profile/edit/${user.id}`}
                              className="bg-green-500 hover:bg-green-400 text-gray-100 text-lg px-16 py-2 cursor-pointer rounded-full"
                            >
                              Update
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <p>You are not logged in.</p>;
}
