import useUserAuth from "../../hooks/useIsUser";

export default function UserDashboard() {
    const userIsLoggedIn = useUserAuth();

    if (userIsLoggedIn) {
        return <p>Welcome USER! You are logged in.</p>;
    }
    return <p>You are not logged in.</p>;
}
