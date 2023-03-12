const baseUrl = "http://localhost:3030/data/products";

export const findProductsByUserid = (ownerId) => {
    return fetch(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`)
        .then(result => result.json())
}