
const baseUrl = 'http://localhost:3030/data/recipes'

export const getRandomRecipe = (recipes) => {
    let randomRecipe = {};
    const index = Math.floor(Math.random() * recipes.length);

    randomRecipe = { ...recipes[index] };

    return randomRecipe;
}

export const getRecipesByUser = () =>{
    fetch('URL: /data/comments?where=gameId%3D%22{gameId}%22')
}