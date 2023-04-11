import styles from './GalleryRecipes.module.css'
import * as recipeService from '../../../service/recipeService.js';

import { RecipeContext } from '../../../context/RecipeContext.js';
import { useContext } from 'react';

import { Link } from 'react-router-dom';

export const GalleryRecipes = () => {

    const { recipes } = useContext(RecipeContext);
    const sortedRecipes = recipeService.sortRecipesByCreationDateDesc(recipes, 5);

    return (
        <section className={styles["gallery"]}>
            <ul type="none">
                {
                    sortedRecipes.map(recipe =>
                        <li className={styles["article-item"]} key={recipe._id}>
                            <Link to={`/details/${recipe._id}`}>
                                <img src={recipe["profile-image"]} alt={recipe.name} />
                                <div className={styles["article-item__info"]}>
                                    <h3>{recipe.name}</h3>
                                    <p>{recipeService.formatDate(recipe._createdOn)}<span>{recipe.user["full-name"]}</span></p>
                                </div>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}