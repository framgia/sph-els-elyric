const useIsUser = () => {
    const token = localStorage.getItem("token");
    return token;
};

export default useIsUser;
