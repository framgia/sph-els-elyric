const useIsAdmin = () => {
    const token = localStorage.getItem("admin_token");
    return token;
};

export default useIsAdmin;
