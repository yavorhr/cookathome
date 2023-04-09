
import * as request from './requester.js'

const baseUrl = "http://localhost:3030/data/products";

export const getProductsByUserId = (ownerId) => request.get(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`)
export const addProduct = (newProduct) => request.post(baseUrl, newProduct);
export const removeProduct = (productId) => request.del(`${baseUrl}/${productId}`);
export const updateProduct = (productId, updatedProduct) => request.put(`${baseUrl}/${productId}`, updatedProduct);


