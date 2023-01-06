import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import HeaderNav from "./components/HeaderNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div>
            <div className="px-10 py-5 bg-gradient-to-b from-[#617EFF] to-[#34B3F9] text-gray-50">
                <HeaderNav />
            </div>
            <div className="mx-20">
                <Routes>
                    <Route path="/register" element={<RegistrationPage />} />
                </Routes>
            </div>
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
