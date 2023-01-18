import AdminLoginForm from "../../components/admin/AdminLoginForm";

export default function AdminLoginPage({ isAdmin, setIsAdmin }) {
    return (
        <div className="w-full h-screen grid place-items-center">
            <AdminLoginForm isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        </div>
    );
}
