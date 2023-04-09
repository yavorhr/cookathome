import styles from './Recipe.module.css';
import * as recipeService from '../../../../service/recipeService.js';

import { Link } from 'react-router-dom';

export const Recipe = ({ recipe }) => {
    return (
        <li className={styles["user-recipe-item"]}>
            <article>
                <img src="https://images.healthshots.com/healthshots/en/uploads/2022/09/14175516/financially-independent-1600x900.jpg">
                </img>
                <div className={styles["recipe-user__info"]}>
                    <span>{recipe.user["full-name"]}</span> cooked <Link to={`/details/${recipe._id}`}>"{recipe.name}"</Link>
                    <p>{recipeService.formatDate(recipe._createdOn) }</p>
                </div>
            </article>
        </li>
    )
}