const baseUrl = "http://localhost:3030/data/favorites";

export const addToFavorites = (recipeId, accessToken) => {
    try {
        return fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application-json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify({ recipeId })
        })
            .then(resp => resp.json());
    } catch (error) {
        console.log(error);
    }
}