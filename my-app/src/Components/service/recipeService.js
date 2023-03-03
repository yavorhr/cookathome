
const baseUrl = 'http://localhost:3030/data/recipes'

export const getRandomRecipe = (recipes) => {
    let randomRecipe = {};
    const index = Math.floor(Math.random() * recipes.length);

    randomRecipe = { ...recipes[index] };

    return randomRecipe;
}

export const sortRecipesByCreationDateDesc = (recipesArray) => {

    let result = [];
    result = [...recipesArray];

    function compare(a, b) {
        if (a.createdOn < b.createdOn) {
            return -1;
        }
        if (a.createdOn > b.createdOn) {
            return 1;
        }
        return 0;
    }
    return result.sort(compare).splice(0, 5);
}

export const findRecipesBySeason = (season) => {
    const toUpperCase = season.charAt(0).toUpperCase() + season.slice(1);
    console.log(toUpperCase);
}