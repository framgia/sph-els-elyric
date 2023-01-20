import useLocalStorage from "../../hooks/useLocalStorage";

export default function AdminDashboard() {
    const { IsAdmin } = useLocalStorage();

    if (IsAdmin) {
        return <p>Welcome ADMIN! You are logged in.</p>;
    }
    return <p>You are not logged in.</p>;
}
