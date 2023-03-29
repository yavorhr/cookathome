import styles from './Navigation.module.css';

import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className={styles["navigation"]}>
            <ul type="none">
                <span>New recipes</span>
                <li>
                    <Link to="">All</Link>
                </li>
                <li>
                    <Link to="">Salads</Link>
                </li>
                <li>
                    <Link to="">Main</Link>
                </li>
                <li>
                    <Link to="">Pre-dish</Link>
                </li>

                <li>
                    <Link to="">Soups</Link>
                </li>

                <li>
                    <Link to="">Fish</Link>
                </li>

                <li>
                    <Link to="">Vegan</Link>
                </li>
            </ul>
        </nav>);
}