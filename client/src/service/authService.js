
import * as request from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const login = (userData) => 
    request.post(`${baseUrl}/login`, userData);

    export const logout = async (accessToken) => {
        try {
            const response = await fetch(`${baseUrl}/logout`, {
                headers: {
                    'X-Authorization': accessToken
                }
            });
    
            return response;
        } catch (error) {
            console.log(error);
        }
    };
    
/* Eror handling when unique email */
export const register = (userData) =>
    request.post(`${baseUrl}/register`, userData);