import { Link } from "react-router-dom";
import styles from "./CardItem.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, } from '@fortawesome/free-solid-svg-icons';

/*TODO:To check all css for repaeting styles*/

export const CardItem = ({
    recipe }) => {

    return (
        <li>
            <Link to={`/details/${recipe._id}`}>
                <div className={styles["card-item"]}>
                    <div className={styles["image-holder"]}>
                        <img className={styles["card-item__img"]} src={recipe["profile-image"]} alt="recipe-image" />
                    </div>
                    <p className={styles["card-title"]}>{recipe.name}</p>
                    <p className={styles["card-descr"]}>{recipe.description}</p>
                    <div className={styles["recipe-data"]}>
                        <div className={styles["level-author-wrap"]}>
                            <p className={styles["recipe-level"]}>Level : <p>{recipe.level}</p> </p>
                            <p className={styles["recipe-level"]}>Author : <p>John</p> </p>
                        </div>
                        <div className={styles["recipe-cal-time-wrap"]}>
                            <p className={styles["item"]}>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>{recipe["cook-time"]} min
                            </p>
                            <p className={styles["item"]}>
                                {recipe.calories} kcal
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
}
