export default function AdminDashboard({ isAuth }) {
    console.log("Admindashboard", isAuth);
    if (isAuth) {
        return <p>Welcome ADMIN! You are logged in.</p>;
    }
    return <p>You are not logged in.</p>;
}
