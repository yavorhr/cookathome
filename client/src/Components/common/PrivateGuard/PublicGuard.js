import { Navigate, Outlet } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext.js";

export const PublicGuard = () => {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    return <Outlet />
}