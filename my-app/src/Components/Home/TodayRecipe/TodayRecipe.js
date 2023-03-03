import styles from './TodayRecipe.module.css';

import * as recipeService from '../../service/recipeService.js';

export const TodayRecipe = ({
    recipes }) => {

    const recipe = recipeService.getRandomRecipe(recipes);

    return (
        <div className={styles["today-recipe"]}>
            <div className={styles["today-recipe__img-holder"]}>
                <img src={recipe.imageUrl} alt="" />
            </div>
            <article>
                <p className={styles["today-recipe__title"]}>Vegeterian Dinner </p>
                <h2>{recipe.name}</h2>
                <p className={styles["today-recipe__descr"]}>Dignissimos culpa aliquid ad nulla nemo, esse unde iusto beatae facilis
                    quia, minima assumenda.</p>
                <a href="">Get the recipe</a>
            </article>
        </div>);
}