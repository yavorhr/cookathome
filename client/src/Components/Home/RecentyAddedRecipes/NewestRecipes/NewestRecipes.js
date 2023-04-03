import styles from './NewestRecipes.module.css';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation.js';
import { useParams } from 'react-router-dom';

export const NewestRecipes = ({ recipes }) => {


    return (
        <>
            <Navigation/>

            <ul className={styles["latest-recipes__grid"]} type="none">
                {recipes.map(r =>

                    <li className={styles["recipe-card"]} key={r._id}>
                        <div className={styles["img-holder"]}>
                            <img src={r.imageUrl} alt="recipe image" />
                        </div>
                        <div className={styles["recipe-card__info"]}>
                            <h3>
                                <Link to={`/details/${r._id}`}>{r.name}</Link>
                            </h3>
                            <p>{new Date(r._createdOn).toLocaleDateString()}<span href="">{r.user["full-name"]}</span> </p>
                        </div>
                    </li>
                )}
            </ul>
        </>

    );
}