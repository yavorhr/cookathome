import { Navigate, Outlet } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext.js";

export const PrivateGuard = () => {
    const { isAuthenticated } = useContext(AuthContext);
    console.log(isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/users/login" />
    }

    return <Outlet />
}