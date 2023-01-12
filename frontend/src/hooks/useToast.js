import { useState } from "react";
import { toast } from "react-toastify";

export function useToast() {
    const [toastId, setToastID] = useState(null);

    function showToast(type, message) {
        setToastID(
            toast[type](message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        );
    }

    return { toastId, showToast };
}
