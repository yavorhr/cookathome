import styles from './FavoritesItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from "react-router-dom";

export const FavoritesItem = ({
    clockIcon,
    recipe,
    onRemoveRecipe
}) => {


    return (
        <li className={styles["list-item"]}>
            <button
                onClick={() => onRemoveRecipe(recipe._id)}>Remove
            </button>
            <Link to={`/details/${recipe.recipeId}`}>
                <div className={styles["img-holder"]}>
                    <img src={recipe.imageUrl} alt="" />
                </div>
                <div className={styles["card-info"]}>
                    <h3 className={styles["card-title"]}>{recipe.name}</h3>
                    <p className={styles["card-descr"]}>
                        {recipe.description}
                    </p>
                    <span>
                        <FontAwesomeIcon icon={clockIcon}></FontAwesomeIcon>
                        {recipe['cook-time']} min
                    </span>
                </div>
            </Link>
        </li>);
}