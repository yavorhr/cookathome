import { createContext } from "react";
import { useLocalStorage } from "../hooks/userLocalStorage.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const userLogin = (userData) => {
        setAuth(userData);
        navigate('/')
    }

    const userLogout = () => {
        setAuth({});
    };

    return (
        <AuthContext.Provider value={{
            user: auth,
            userLogout,
            userLogin,
            isAuthenticated: Boolean(auth.accessToken)
        }}>
            {children}
        </AuthContext.Provider>
    );
}