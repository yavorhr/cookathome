import styles from './NewestRecipes.module.css';

export const NewestRecipes = ({ recipes }) => {

    return (
        <ul className={styles["latest-recipes__grid"]} type="none" recipes={recipes}>
            {recipes.map(r =>
                <li className={styles["recipe-card"]} key={r._id}>
                    <img src={r.imageUrl} alt="" />
                    <div className={styles["recipe-card__info"]}>
                        <h3> <a href="">{r.name}</a> </h3>
                        <p>{r._createdOn}<a href="">Йорданка Т.</a> </p>
                    </div>
                </li>)}
        </ul>
    );
}