import styles from './Recipe.module.css';

export const Recipe = () => {
    return (
         <li className={styles["user-recipe-item"]}>
            <article>
                <img src="https://images.healthshots.com/healthshots/en/uploads/2022/09/14175516/financially-independent-1600x900.jpg">
                </img>
                <div className={styles["recipe-user__info"]}>
                    <a href="">Albena</a> sgotvi <a href="">Retro sladkish</a>
                    <p>4 min ago</p>
                </div>
            </article>
        </li>
    )
}