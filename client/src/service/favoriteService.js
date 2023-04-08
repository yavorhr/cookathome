const baseUrl = "http://localhost:3030/data/favorites";

export const addToFavorites = (data, accessToken) => {
    try {
        return fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application-json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify( data )
        })
            .then(resp => resp.json());
    } catch (error) {
        console.log(error);
    }
}

export const getRecipeByUserId = (ownerId) => {
    return fetch(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`)
        .then(result => result.json())
}

export const removeRecipe = (recipeId, accessToken) => {
    return fetch(`${baseUrl}/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application-json',
            'X-Authorization': accessToken
        }
    }).then(result => result.json());
}

