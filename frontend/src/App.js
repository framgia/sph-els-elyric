import { Route, Routes } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserRegistrationPage from "./pages/user/UserRegistrationPage";
import AdminRegistrationPage from "./pages/admin/AdminRegistrationPage";
import CategoriesPage from "./pages/CategoriesPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <div>
            <div className="px-10 py-5 bg-gradient-to-b from-[#617EFF] to-[#34B3F9] text-gray-50">
                <HeaderNav />
            </div>

            {/* ADMIN ROUTE  */}
            <Routes className="mx-20">
                <Route
                    path="admin/register"
                    element={<AdminRegistrationPage />}
                />
            </Routes>

            {/* USER ROUTE  */}
            <Routes className="mx-20">
                <Route path="/register" element={<UserRegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default App;
