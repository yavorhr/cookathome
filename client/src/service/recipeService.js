
import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/recipes'

export const getRecipeById = (recipeId) => request.get(`${baseUrl}/${recipeId}`);
export const getRecipeByUserId = (ownerId) => request.get(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`);
export const getRecipeByCategory = (category) => request.get(`${baseUrl}?where=advanced-category%3D%22${category}%22`);
export const getRecipesByCategoryAndType = (category, type) => request.get(`${baseUrl}?where=${category}%3D%22${type}%22`);

export const create = (gameData) => request.post(baseUrl, gameData);
export const remove = (recipeId) => request.del(`${baseUrl}/${recipeId}`);
export const edit = (recipeId, updatedRecipe) => request.put(`${baseUrl}/${recipeId}`, updatedRecipe);

/* Helper functions and data */

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
                '/recipes/level/chef']
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
    "Veggetarian": ["Fruits", "Vegetables", "Beans", "Nuts", "Seeds", "Pasta", "Rice", "Bread", "Yoghurt", "Soup", "Salad"]
}

export const getRandomRecipe = (recipes) => {
    let randomRecipe = {};
    const index = Math.floor(Math.random() * recipes.length);

    randomRecipe = { ...recipes[index] };

    return randomRecipe;
}

export const sortRecipesByCreationDateDesc = (recipesArray, count) => {

    let result = [];
    result = [...recipesArray];

    function compare(a, b) {
        if (formatDate(a._createdOn) < formatDate(b._createdOn)) {
            return -1;
        }
        if (formatDate(a._createdOn) > formatDate(b._createdOn)) {
            return 1;
        }
        return 0;
    }
    return result.sort(compare).splice(0, count);
}

export const findRecipesBySeason = (season) => {
    const toUpperCase = season.charAt(0).toUpperCase() + season.slice(1);
    return toUpperCase;
}

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
}