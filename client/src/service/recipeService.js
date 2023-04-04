
const baseUrl = 'http://localhost:3030/data/recipes'

export const urlMappingDataRecipes = [
    {
        season:
            ['/recipes/season/spring',
                '/recipes/season/summer',
                '/recipes/season/autumn',
                '/recipes/season/winter']
    }, {
        'Time of the day':
            ['/recipes/time-of-the-day/breakfast',
                '/recipes/time-of-the-day/lunch',
                '/recipes/time-of-the-day/dinner',
                '/recipes/time-of-the-day/snack']
    },

    {
        'Way of eating':
            ['/recipes/category/meat',
                '/recipes/category/veggeterian']
    },
    {
        'Meat Proteins':
            ['/recipes/advanced-category/pork',
                '/recipes/advanced-category/chicken',
                '/recipes/advanced-category/fish',
                '/recipes/advanced-category/lamb']
    }, {
        'Kitchen':
            ['/recipes/kitchen/indian',
                '/recipes/kitchen/chinese',
                '/recipes/kitchen/japanese',
                '/recipes/kitchen/bulgarian',
                '/recipes/kitchen/greek',
            ]
    }, {
        'By time':
            ['/recipes/cat-by-time/up-to-30-min',
                '/recipes/cat-by-time/up-to-60-min',
                '/recipes/cat-by-time/up-to-90-min',
                '/recipes/cat-by-time/more-than-90-min']
    }, {
        'From Zero to Hero':
            ['/recipes/level/beginner',
                '/recipes/level/intermediate',
                '/recipes/level/advanced',
                '/recipes/level/chef',]
    }
    ,
    {
        'By calories':
            ['/recipes/cat-by-calories/up-to-200-kcal',
                '/recipes/cat-by-calories/up-to-500-kcal',
                '/recipes/cat-by-calories/up-to-800-kcal',
                '/recipes/cat-by-calories/more-than-800-kcal']
    }]

export const mealsCategories =
{
    "Fish": ["Tuna", "Salmon", "Catfish", "Cod", "Bass", "Trout"],
    "Meat": ["Pork", "Lamb", "Duck", "Goat", "Beef", "Chicken", "Turkey"],
    "Veggetarian": ["Fruits", "Vegetables", "Beans", "Nuts", "Seeds", "Pasta", "Rice", "Bread", "Yoghurt", "Soup"]
}


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
        if (formatDate(a.createdOn) < formatDate(b.createdOn)) {
            return -1;
        }
        if (formatDate(a.createdOn) > formatDate(b.createdOn)) {
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

export const findRecipesByCategory = (category) => {
    return fetch(`${baseUrl}?where=advanced-category%3D%22${category}%22`)
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


export const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
}