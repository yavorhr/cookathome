import styles from './RecipeByUser.module.css';
import { Recipe } from './Recipe/Recipe.js';

export const RecipeByUser = ({ recipes }) => {

    return (
        <div className={styles["recipe-by-user"]}>
            <ul type="none">

                {recipes.map(recipe => <Recipe key={recipe._id} recipe={recipe}></Recipe>)}

            </ul>
        </div>
    );
}