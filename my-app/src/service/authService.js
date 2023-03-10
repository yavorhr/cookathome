
const baseUrl = 'http://localhost:3030/users';

export const login = (userData) => {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(userData)
    })
        .then(resp => resp.json())
}

export const logout = (accessToken) => {
    return fetch(`${baseUrl}/logout`, {
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accessToken
        },

    })
}