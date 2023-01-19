import useIsAdmin from "../../hooks/useIsAdmin";

export default function AdminDashboard() {
    const adminIsLoggedIn = useIsAdmin();

    if (adminIsLoggedIn) {
        return <p>Welcome ADMIN! You are logged in.</p>;
    }
    return <p>You are not logged in.</p>;
}
