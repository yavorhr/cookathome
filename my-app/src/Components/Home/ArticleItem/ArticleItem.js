import styles from './ArticleItem.module.css';

export const ArticleItem = () => {
    <li className={styles["article-item"]}>
        <a href="">
            <img src="/img/dishes/eggsausage.jpg" alt="recipe details" />
            <div className={styles["article-item__info"]}>
                <h3>Egg & Sausage</h3>
                <p>08 August <span>Admin</span></p>
            </div>
        </a>
    </li>
}