import { Link } from "react-router-dom";
import styles from "./CardItem.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

/*TODO:To check all css for repaeting styles*/ 

export const CardItem = ({
    recipe }) => {
    return (
        <li>
            <Link to={`/details/${recipe._id}`}>
                <div className={styles["card-item"]}>
                    <img className={styles["card-item__img"]} src={recipe.imageUrl} alt="" />
                    <p className={styles["card-title"]}>{recipe.name}</p>
                    <span>
                        <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>{recipe["cook-time"]} min
                    </span>
                </div>
            </Link>
        </li>
    );
}