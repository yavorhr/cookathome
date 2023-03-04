import styles from './CatalogItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons'

export const CatalogItem = () => {
    return (
        <li className={styles["list-item"]}>
            <a href="#">
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
            </a>
        </li>
    );
}