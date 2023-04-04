import styles from './NewestRecipes.module.css';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation.js';
import { useEffect, useState } from 'react';
import * as recipeService from '../../../../service/recipeService.js'

export const NewestRecipes = ({ }) => {
    const [recipes, setRecipes] = useState([]);
    const [category, setCategory] = useState('');

    const recipeCategory = (e) => {
        if (e.target.textContent.startsWith("New")) {
            return
        }
        setCategory(e.target.textContent.toLowerCase());
    }

    recipes.map(r => console.log(r))

    useEffect(() => {
        recipeService
            .findRecipesByCategory(category)
            .then(result => {
                setRecipes(result)
            }


            )
    }, [category])

    return (
        <>
            <Navigation category={recipeCategory} />


            <ul className={styles["latest-recipes__grid"]} type="none">
                {recipes && recipes.map(r =>

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

const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
}