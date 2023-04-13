import styles from './Navigation.module.css';

export const Navigation = ({
    category }) => {

    return (
        <nav className={styles["navigation"]}>
            <ul type="none" onClick={(e) => category(e)}>
                <li className={styles["all-recipes"]}>New recipes</li>
                <li className={styles["cat-link"]}>
                    Category
                </li>
                <li className={styles["cat-link"]}>
                    Level
                </li>
                <li className={styles["cat-link"]}>
                    Kitchen
                </li>
                <li className={styles["cat-link"]}>
                    Calories
                </li>
                <li className={styles["cat-link"]}>
                    Season
                </li>
                <li className={styles["cat-link"]}>
                    By time
                </li>

            </ul>
        </nav>);
}