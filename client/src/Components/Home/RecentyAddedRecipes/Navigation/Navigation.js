import styles from './Navigation.module.css';

import { Link } from 'react-router-dom';

export const Navigation = ({
    category }) => {

    return (
        <nav className={styles["navigation"]}>
            <ul type="none" onClick={(e) => category(e)}>
                <span>New recipes</span>
                <li>
                    Tuna
                </li>
                <li>
                    Pork
                </li>
                <li>
                    Beef
                </li>
                <li>
                    Chicken
                </li>
                <li>
                    Lamb
                </li>
                <li>
                    Pasta
                </li>
                <li>
                    Fruits
                </li>
                <li>
                    Vegetables
                </li>
                <li>
                    Rice
                </li>
            </ul>
        </nav>);
}