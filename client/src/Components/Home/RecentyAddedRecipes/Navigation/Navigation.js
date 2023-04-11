import styles from './Navigation.module.css';

import { Link } from 'react-router-dom';

export const Navigation = ({
    category }) => {

    return (
        <nav className={styles["navigation"]}>
            <ul type="none" onClick={(e) => category(e)}>
                <li>New recipes</li>
                <li>
                    Category
                </li>
                <li>
                    Level
                </li>
                <li>
                    Kitchen
                </li>
                <li>
                    Calories
                </li>
                <li>
                    Season
                </li>
                <li>
                    By time
                </li>

            </ul>
        </nav>);
}