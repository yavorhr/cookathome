import { Link } from "react-router-dom";
import styles from "./CardItem.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

/*TODO:To check all css for repaeting styles*/

export const CardItem = ({
    recipe }) => {

        console.log(recipe);

    return (
        <li>
            <Link to={`/details/${recipe._id}`}>
                <div className={styles["card-item"]}>
                    <div className={styles["image-holder"]}>
                        <img className={styles["card-item__img"]} src={recipe["profile-image"]} alt="recipe-image" />
                    </div>
                    <p className={styles["card-title"]}>{recipe.name}</p>
                    {/* <p className={styles["card-author"]}>{recipe.user["full-name"]}</p> */}
                    <p className={styles["card-descr"]}>{recipe.description}</p>
                    <span>
                        <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>{recipe["cook-time"]} min
                    </span>
                </div>
            </Link>
        </li>
    );
}
