
import * as request from './requester.js';

const baseUrl = "http://localhost:3030/data/favorites";

export const addRecipe = (recipe) => request.post( baseUrl, recipe);
export const getRecipeByUserId = (ownerId) => request.get(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`);
export const removeRecipe = (recipeId) => request.del(`${baseUrl}/${recipeId}`);

