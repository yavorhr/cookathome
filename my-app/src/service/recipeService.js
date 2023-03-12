
const baseUrl = 'http://localhost:3030/data/recipes'

export const urlMappingDataRecipes = [
    {
        season:
            ['/catalog-recipes/spring',
                '/catalog-recipes/summer',
                '/catalog-recipes/autumn',
                '/catalog-recipes/winter']
    }, {
        'Meals of the day':
            ['/catalog-recipes/breakfast',
                '/catalog-recipes/lunch',
                '/catalog-recipes/dinner',
                '/catalog-recipes/snack']
    }, {
        'Meat recipes':
            ['/catalog-recipes/pork',
                '/catalog-recipes/chicken',
                '/catalog-recipes/fish',
                '/catalog-recipes/lamb']
    }, {
        'Kitchen':
            ['/catalog-recipes/indian',
                '/catalog-recipes/american',
                '/catalog-recipes/european',
                '/catalog-recipes/asian']
    }, {
        'Quick meals':
            ['/catalog-recipes/proteins',
                '/catalog-recipes/salads',
                '/catalog-recipes/veggies',
                '/catalog-recipes/desserts']
    }, {
        'From Zero to Hero':
            ['/catalog-recipes/beginner',
                '/catalog-recipes/intermediate',
                '/catalog-recipes/advanced',
                '/catalog-recipes/chefs']
    }, {
        'Calories count':
            ['/catalog-recipes/up-to-200',
                '/catalog-recipes/up-to-500',
                '/catalog-recipes/up-to-800',
                '/catalog-recipes/up-to-1000']
    }]


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
    return toUpperCase;
}

export const getById = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then(resp => resp.json());
}

export const createRecipe = (recipe, accessToken) => {
    try {
        return fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application-json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify(recipe)
        })
            .then(resp => resp.json());
    } catch (error) {
        console.log(error);
    }
}

export const findProductsByUserid = (ownerId) => {
    return fetch(`http://localhost:3030/data/products?where=_ownerId%3D%22${ownerId}%22`)
    .then(result => result.json())
}