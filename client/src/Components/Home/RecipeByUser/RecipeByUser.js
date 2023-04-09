import styles from './RecipeByUser.module.css';
import { Recipe } from './Recipe/Recipe.js';

import * as recipeServer from '../../../service/recipeService.js';
import { RecipeContext } from '../../../context/RecipeContext.js';
import { useContext } from 'react';

export const RecipeByUser = ({ }) => {

    const { recipes } = useContext(RecipeContext);
    const sortedRecipes = recipeServer.sortRecipesByCreationDateDesc(recipes);

    return (
        <div className={styles["recipe-by-user"]}>
            <ul type="none">
                {sortedRecipes.map(recipe => <Recipe key={recipe._id} recipe={recipe}></Recipe>)}
            </ul>
        </div>
    );
}

/*TODO:Add pagination*/