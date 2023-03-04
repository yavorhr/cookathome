import styles from './CatalogItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

export const CatalogItem = ({ recipe }) => {


    return (
        <li className={styles["list-item"]}>
            <Link to={`/details/${recipe._id}`}>
                <div className={styles["img-holder"]}>
                    <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                </div>
                <div className={styles["card-info"]}>
                    <h3 className={styles["card-title"]}>Lasagna</h3>
                    <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                    <span>
                        <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>
                        30 mins
                    </span>
                </div>
            </Link>
        </li>
    );
}