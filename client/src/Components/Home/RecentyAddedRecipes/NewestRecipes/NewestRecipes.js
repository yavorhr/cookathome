import styles from './NewestRecipes.module.css';

import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { Navigation } from '../Navigation/Navigation.js';
import * as recipeService from '../../../../service/recipeService.js'

import { RecipeContext } from '../../../../context/RecipeContext.js';
import { CategoriesList } from './ListCategories/CategoriesList.js';

export const NewestRecipes = () => {
    const [category, setCategory] = useState('all');
    const [type, setType] = useState('');
    const [recipesByCat, setRecipesByCat] = useState([]);

    const { recipes } = useContext(RecipeContext);

    useEffect(() => {
        recipeService
            .getRecipesByCategoryAndType(category, type)
            .then(result => setRecipesByCat(result));
    }, [type]);

    const recipeCategory = (e) => {
        if (e.target.textContent == "New recipes") {
            setCategory('');
            setRecipesByCat(recipes);
        }

        if (e.target.textContent.startsWith("New recipes")) {
            return;
        }
        setCategory(e.target.textContent.toLowerCase());
    }

    const onTypeSelect = (e) => {
        setType(e.target.textContent)
    };

    return (
        <>
            <Navigation category={recipeCategory} />
            <CategoriesList onSelect={onTypeSelect} filter={category} />

            <ul className={styles["latest-recipes__grid"]} type="none">

                {recipesByCat.length > 0
                    ? recipesByCat.map(r =>
                        <li className={styles["recipe-card"]} key={r._id}>
                            <div className={styles["img-holder"]}>
                                <img src={r["profile-image"]} alt="recipe image" />
                            </div>
                            <div className={styles["recipe-card__info"]}>
                                <h3>
                                    <Link to={`/details/${r._id}`}>{r.name}</Link>
                                </h3>
                                <p>{recipeService.formatDate(r._createdOn)}<span href="">{r.user["full-name"]}</span> </p>
                            </div>
                        </li>
                    ) : recipes.map(r =>
                        <li className={styles["recipe-card"]} key={r._id}>
                            <div className={styles["img-holder"]}>
                                <img src={r["profile-image"]} alt="recipe image" />
                            </div>
                            <div className={styles["recipe-card__info"]}>
                                <h3>
                                    <Link to={`/details/${r._id}`}>{r.name}</Link>
                                </h3>
                                <p>{recipeService.formatDate(r._createdOn)}<span href="">{r.user["full-name"]}</span> </p>
                            </div>
                        </li>)
                }




            </ul>
        </>

    );
}
