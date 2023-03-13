import styles from './Recipe.module.css';

export const Recipe = ({ recipe }) => {
    return (

        //TODO: to add Users database in back-end. Need query to get users and their latest recipies in order to render the name of the user.

        <li className={styles["user-recipe-item"]}>
            <article>
                <img src="https://images.healthshots.com/healthshots/en/uploads/2022/09/14175516/financially-independent-1600x900.jpg">
                </img>
                <div className={styles["recipe-user__info"]}>
                    <a href="">Albena</a> sgotvi <a href="">{recipe.name}</a>
                    <p>{recipe._createdOn}</p>
                </div>
            </article>
        </li>
    )
}