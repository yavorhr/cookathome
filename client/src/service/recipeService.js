
const baseUrl = 'http://localhost:3030/data/recipes'

export const urlMappingDataRecipes = [
    {
        season:
            ['/recipes/season/spring',
                '/recipes/season/summer',
                '/recipes/season/autumn',
                '/recipes/season/winter']
    }, {
        'Meals of the day':
            ['/recipes/time-of-the-day/breakfast',
                '/recipes/time-of-the-day/lunch',
                '/recipes/time-of-the-day/dinner',
                '/recipes/time-of-the-day/snack']
    }, {
        'Meat recipes':
            ['/recipes/category/pork',
                '/recipes/category/chicken',
                '/recipes/category/fish',
                '/recipes/category/lamb']
    }, {
        'Kitchen':
            ['/recipes/indian',
                '/recipes/category/pork',
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

export const mealsCategories = 
    {
        "Fish": ["Sharan", "Shtuka"],
        "Meat": ["Pork", "Lamb"],
        "Veggetarian": ["Potatoes", "Patladjan"]
    }
;

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

export const findRecipesByUserId = (ownerId) => {
    return fetch(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`)
        .then(result => result.json())
}

export const getRecipesByCategoryAndType = (category, type) => {
    return fetch(`${baseUrl}?where=${category}%3D%22${type}%22`)
        .then(result => result.json())
}

export const deleteRecipeByid = (recipeId, accessToken) => {
    return fetch(`${baseUrl}/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application-json',
            'X-Authorization': accessToken
        }
    }).then(result => result.json());
}

export const updateRecipe = (recipeId, updatedRecipe, accessToken) => {
    return fetch(`${baseUrl}/${recipeId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application-json',
            'X-Authorization': accessToken
        }, body: JSON.stringify(updatedRecipe)
    }).then(result => result.json());
}
