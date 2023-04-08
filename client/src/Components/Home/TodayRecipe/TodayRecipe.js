import styles from './TodayRecipe.module.css';

import * as recipeService from '../../../service/recipeService.js';

import { Link } from 'react-router-dom';
import { RecipeContext } from '../../../context/RecipeContext.js';
import { useContext } from 'react';

export const TodayRecipe = ({ }) => {

    const { recipes } = useContext(RecipeContext);
    const recipe = recipeService.getRandomRecipe(recipes);

    return (
        <div className={styles["today-recipe"]}>
            <img src={recipe.imageUrl} alt="" />
            <article>
                <p className={styles["today-recipe__title"]}>Vegeterian Dinner </p>
                <h2>{recipe.name}</h2>
                <p className={styles["today-recipe__descr"]}>Dignissimos culpa aliquid ad nulla nemo, esse unde iusto beatae facilis
                    quia, minima assumenda.</p>
                <Link to={`/details/${recipe._id}`}>Get the recipe</Link>
            </article>
        </div>);
}