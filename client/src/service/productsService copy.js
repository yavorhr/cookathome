const baseUrl = "http://localhost:3030/data/products";

export const findProductsByUserid = (ownerId) => {
    return fetch(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`)
        .then(result => result.json())
}

export const addProduct = (newProduct, accessToken) => {
    try {
        return fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application-json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify(newProduct)
        })
            .then(resp => resp.json());
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = (productId, accessToken) => {
    return fetch(`${baseUrl}/${productId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application-json',
            'X-Authorization': accessToken
        }
    }).then(result => result.json());
}

export const updateProduct = (productId, updatedProduct, accessToken) => {
    return fetch(`${baseUrl}/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application-json',
            'X-Authorization': accessToken
        },body: JSON.stringify(updatedProduct)
    }).then(result => result.json());
}
