import HeaderNav from "./components/HeaderNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRoutes from "./Routes/MainRoutes";

function App() {
    return (
        <div>
            <div className="px-10 py-5 bg-gradient-to-b from-[#617EFF] to-[#34B3F9] text-gray-50">
                <HeaderNav />
            </div>
            <MainRoutes />
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
