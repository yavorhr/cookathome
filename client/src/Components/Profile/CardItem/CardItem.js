import { Link } from "react-router-dom";
import styles from "./CardItem.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


export const CardItem = ({
    recipe }) => {

    return (
        <li>
            <Link to={`/details/${recipe._id}`}>
                <div className={styles["card-item"]}>
                    <img className={styles["card-item__img"]} src={recipe.imageUrl} alt="" />
                    <h3 className={styles["card-title"]}>{recipe.title}</h3>
                    <p className={styles["card-descr"]}>{recipe.descr}</p>
                    <span>
                        <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>{recipe["cook-time"]}
                    </span>
                </div>
            </Link>
        </li>
    );
}