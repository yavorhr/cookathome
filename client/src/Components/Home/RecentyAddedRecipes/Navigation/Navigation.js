import styles from './Navigation.module.css'

export const Navigation = () => {
    return (
        <nav className={styles["navigation"]}>
            <ul type="none">
                <span>New recipes</span>
                <li>
                    <a href="">All</a>
                </li>
                <li>
                    <a href="">Salads</a>
                </li>
                <li>
                    <a href="">Main</a>
                </li>
                <li>
                    <a href="">Pre-dish</a>
                </li>

                <li>
                    <a href="">Soups</a>
                </li>

                <li>
                    <a href="">Fish</a>
                </li>

                <li>
                    <a href="">Vegan</a>
                </li>
            </ul>
        </nav>);
}