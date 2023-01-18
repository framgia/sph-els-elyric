import { useState, useEffect } from "react";

const useUserAuth = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("token");
            if (token) {
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        };
        checkAuth();
    }, []);

    return isAuth;
};

export default useUserAuth;
