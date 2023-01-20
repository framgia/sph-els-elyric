import useUserAuth from "../../hooks/useLocalStorage";

export default function UserDashboard() {
    const { IsUser } = useUserAuth();

    if (IsUser) {
        return <p>Welcome USER! You are logged in.</p>;
    }
    return <p>You are not logged in.</p>;
}
