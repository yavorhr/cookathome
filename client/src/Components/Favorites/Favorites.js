import styles from './Favorites.module.css'

import { AuthContext } from '../../context/AuthContext.js';
import { useContext, useState, useEffect } from 'react';

import { faClock, } from '@fortawesome/free-solid-svg-icons';

import * as favoritesService from '../../service/favoriteService.js';
import { FavoritesItem } from './FavoritesItem/FavoritesItem.js';
import { Spinner } from '../common/Spinner/Spinner.js';

export const Favorites = () => {
    const [recipes, setRecipes] = useState([]);

    const { user } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        favoritesService
            .getRecipeByUserId(user._id)
            .then(result =>
                setRecipes(result));
        setIsLoading(false);
    }, []);

    const removeFromFavoritesById = (recipeId) => {
        setIsLoading(true);
        favoritesService
            .removeRecipe(recipeId)
            .then(result => {
                setRecipes(state => state.filter(r => r._id != recipeId))
                setIsLoading(false);
            })
    }

    return (
        <>
            {isLoading && <Spinner />}
            {recipes.length > 0
                ? <section className={styles["my-recipes"]}>
                    <div>
                        <h2 className={styles["my-recipies__title"]}>My recipes</h2>
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
                    </div>
                </section>

                : <h2 className={styles["title"]} >You have no favorite recipes yet</h2>}
        </>
    );

}
