import styles from './FavoritesItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from "react-router-dom";

export const FavoritesItem = ({
    favIcon,
    clockIcon,
    recipe
}) => {


    return (
        <li className={styles["list-item"]}>
            <Link to={`/details/${recipe.data.recipeId}`}>
                <div className={styles["img-holder"]}>
                    <img src={recipe.data.imageUrl} alt="" />
                </div>
                <div className={styles["card-info"]}>
                    <h3 className={styles["card-title"]}>{recipe.data.name}</h3>
                    <p className={styles["card-descr"]}>
                        {recipe.data.description}
                    </p>
                    <span>
                        <FontAwesomeIcon icon={clockIcon}></FontAwesomeIcon>
                        {recipe.data['cook-time']} min
                    </span>
                </div>
            </Link>
        </li>);
}