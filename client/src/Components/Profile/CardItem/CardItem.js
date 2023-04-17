import { Link } from "react-router-dom";
import styles from "./CardItem.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, } from '@fortawesome/free-solid-svg-icons';

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
                        <div className={styles["user-data"]}>
                            <img src={recipe.user.imageUrl} alt="" />
                            <p>{recipe.user["full-name"]}</p>
                        </div>
                        <div className={styles["wrapper"]}>
                            <p className={styles["item"]}>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>{recipe["cook-time"]} min
                            </p>
                            <p className={styles["item"]}>
                                {recipe.calories} kcal
                            </p>
                            <p className={styles["item"]}>Level:  {recipe.level.charAt(0).toUpperCase() + recipe.level.slice(1)}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
}
