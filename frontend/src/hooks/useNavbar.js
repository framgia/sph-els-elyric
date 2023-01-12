import { useState } from "react";

export function useNavbar() {
    const [currentRoute, setCurrentRoute] = useState("home");

    const navigateTo = (route) => {
        setCurrentRoute(route);
    };

    return { currentRoute, navigateTo };
}
