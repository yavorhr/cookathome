import styles from './Profile.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCamera, faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/AuthContext.js';
import { useContext, useEffect, useState } from 'react';

import * as recipeService from "../../service/recipeService.js"
import * as favoriteService from "../../service/favoriteService.js"

import { CardItem } from './CardItem/CardItem.js';

export const Profile = () => {
    const [recipes, setRecipes] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        recipeService
            .findRecipesByUserId(user._id)
            .then(result =>
                setRecipes(result));

        favoriteService
            .findRecipesByUserId(user._id)
            .then(result =>
                setFavorites(result));

    }, [])

    return (
        <>
            <section className={styles["user-profile"]}>
                <article className={styles["user-details"]}>
                    <div className={styles["img-holder"]}>
                        <img src={user.imageUrl}
                            alt="" />
                    </div>
                    <div className={styles["user-information"]}>
                        <div className={styles["user-personal-data"]}>
                            <div className={styles["wrapper"]}>
                                <div className={styles["name"]}>
                                    <label>full name</label>
                                    <p>{user["full-name"]}</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles["email"]}>
                                    <label>email</label>
                                    <p>{user.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles["user-icons"]}>
                            <div className={styles["wrapper"]}>
                                <button className={styles["btn"]}>
                                    <FontAwesomeIcon icon={faUtensils} className={styles["icon"]}></FontAwesomeIcon>
                                </button>
                                <p>Cooked: <span>
                                    {recipes.length == 0
                                        ? '0'
                                        : recipes.length} </span></p>
                            </div>

                            <div className={styles["wrapper"]}>
                                <button className={styles["btn"]}>
                                    <FontAwesomeIcon icon={faHeart} className={styles["icon"]}></FontAwesomeIcon>
                                </button>
                                <p>Favorites: <span>
                                    {favorites.length == 0
                                        ? '0'
                                        : favorites.length}
                                </span></p>
                            </div>
                            <div className={styles["wrapper"]}>
                                <button className={styles["btn"]}>
                                    <FontAwesomeIcon icon={faCamera} className={styles["icon"]}></FontAwesomeIcon>
                                </button>
                                <p>Gallery</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <section className={styles["recipes"]}>
                <div>
                    {recipes.length > 0
                        ?
                        <>
                            <h2 className={styles["recipes-title"]}>Recently added</h2>
                            <ul className={styles["card-list"]} type="none">
                                {recipes.map(r => <CardItem recipe={r} key={r._id} />)}
                            </ul>
                        </>
                        : <h2 className={styles["recipes-title"]} >You have no recipes yet</h2>
                    }
                </div>
            </section>
        </>


    );


}