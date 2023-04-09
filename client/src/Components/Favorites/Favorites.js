import styles from './Favorites.module.css'

import { AuthContext } from '../../context/AuthContext.js';
import { useContext, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faClock, faV } from '@fortawesome/free-solid-svg-icons';

import * as favoritesService from '../../service/favoriteService.js';
import { FavoritesItem } from './FavoritesItem/FavoritesItem.js';

export const Favorites = () => {
    const [recipes, setRecipes] = useState([]);
    const { user } = useContext(AuthContext);

    console.log(recipes);

    useEffect(() => {
        favoritesService
            .getRecipeByUserId(user._id)
            .then(result =>
                setRecipes(result));
    }, []);

    console.log(recipes);
    const removeFromFavoritesById = (recipeId) => {
        favoritesService
            .removeRecipe(recipeId)
            .then(result =>
                setRecipes(state => state.filter(r => r._id != recipeId)));
    }

    return (
        <>
            <section>
                <article className={styles["favorites__search-bar"]}>
                    <h1 className={styles["title"]}>Search through your recipies</h1>
                    <form action="">
                        <input type="text" placeholder="Type recipe title..." name="" />
                        <button type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["icon"]}></FontAwesomeIcon>
                        </button>
                    </form>
                </article>
            </section>

            {recipes.length > 0 && <section className={styles["my-recipies"]}>
                <h2 className={styles["my-recipies__title"]}>My recipies</h2>
                <ul className={styles["card-list"]} type="none">
                    {recipes.length > 0 &&
                        recipes.map(r =>
                            <FavoritesItem
                                key={r._id}
                                clockIcon={faClock}
                                recipe={r}
                                onRemoveRecipe={removeFromFavoritesById} />)
                    }
                </ul>
            </section>}

            {recipes.length == 0 && <h2 className={styles["title"]} >You have no favorite recipes yet</h2>}
        </>
    );

}
