export default function UserDashboard() {
    const isLoggedIn = false;

    if (isLoggedIn) {
        return <p>Welcome USER! You are logged in.</p>;
    }
    return <p>You are not logged in.</p>;
}
