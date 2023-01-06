import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import HeaderNav from "./components/HeaderNav";

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
        </div>
    );
}

export default App;
