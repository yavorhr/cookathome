import styles from './NewestRecipes.module.css';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation.js';
import { useEffect, useState } from 'react';
import * as recipeService from '../../../../service/recipeService.js'

export const NewestRecipes = ({  }) => {
    const [category, setCategory] = useState('');
    const [recipes, setRecipes] = useState('');

    const recipeCategory = (e) => {
        if (e.target.textContent.startsWith("New")) {
            return
        }
        setCategory(e.target.textContent.toLowerCase());
    }

    useEffect(() => {
        recipeService
            .getRecipeByCategory(category)
            .then(result => {
                const sortByCreationDate = recipeService.sortRecipesByCreationDateDesc(result);
                setRecipes(sortByCreationDate);
            });
    }, [category])

    return (
        <>
            <Navigation category={recipeCategory} />

            <ul className={styles["latest-recipes__grid"]} type="none">
                {recipes && recipes.map(r =>

                    <li className={styles["recipe-card"]} key={r._id}>
                        <div className={styles["img-holder"]}>
                            <img src={r.links[0].url} alt="recipe image" />
                        </div>
                        <div className={styles["recipe-card__info"]}>
                            <h3>
                                <Link to={`/details/${r._id}`}>{r.name}</Link>
                            </h3>
                            <p>{recipeService.formatDate(r._createdOn)}<span href="">{r.user["full-name"]}</span> </p>
                        </div>
                    </li>
                )}
            </ul>
        </>

    );
}
