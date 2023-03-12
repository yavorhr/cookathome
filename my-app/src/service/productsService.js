const baseUrl = "http://localhost:3030/data/products";

export const findProductsByUserid = (ownerId) => {
    return fetch(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`)
        .then(result => result.json())
}


export const addTask = (task, accessToken) => {
    try {
        return fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application-json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify(task)
        })
            .then(resp => resp.json());
    } catch (error) {
        console.log(error);
    }
}