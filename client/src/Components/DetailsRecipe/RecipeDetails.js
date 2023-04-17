import styles from './RecipeDetails.module.css';
import uuid from 'react-uuid';

import * as recipeService from '../../service/recipeService.js';
import * as productService from '../../service/productsService.js'
import * as favoriteService from '../../service/favoriteService.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCamera, faFireBurner, faPenToSquare, faTrashCan, faHeart, faClock, faPlus, } from '@fortawesome/free-solid-svg-icons'

import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

import { ProductItem } from './ProductItem/ProductItem.js';
import { Gallery } from './Gallery/Gallery.js';
import { Spinner } from '../common/Spinner/Spinner.js';

export const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [savedToFavorites, setSavedToFavorites] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { recipeId } = useParams();

    const { user } = useContext(AuthContext);
    const isOwner = user._id == recipe._ownerId;
    const accessToken = user.accessToken;

    useEffect(() => {
        setIsLoading(true);
        const getRecipeById =
            recipeService
                .getRecipeById(recipeId);

        // Check if User has already add to favorites
        const checkFavoriteRecipesByUserId =
            favoriteService.getRecipeByUserId(user._id);

        Promise.all([getRecipeById, checkFavoriteRecipesByUserId])
            .then(data => {

                if (data[0].code == '404') {
                    navigate('/')
                    return;
                }
                setRecipe(data[0]);

                const allFavoriteRecipes = data[1];

                allFavoriteRecipes.length > 0
                    && allFavoriteRecipes
                        .some(recipe =>
                            recipe.recipeId == recipeId)
                    && setSavedToFavorites(true)

                setIsLoading(false);
            })
    }, [])

    // Add style if user already added the current recipe to favorites;
    let className = "";
    if (savedToFavorites) {
        className = "saved-favorites"
    } else {
        className = "";
    }

    const addToFavoritesHandler = (recipe) => {
        favoriteService
            .addRecipe(
                {
                    recipeId: recipe._id,
                    name: recipe.name,
                    description: recipe.description,
                    imageUrl: recipe["profile-image"],
                    'cook-time': recipe['cook-time'],
                }, accessToken)
            .then(result =>
                setSavedToFavorites(true)
            );
    }

    const addProductAndCallAlert = (product) => {
        handleButtonClick();
        addProductHandler(product)
    }

    const handleButtonClick = () => {
        setIsAlertVisible(true);

        setTimeout(() => {

            setIsAlertVisible(false);
        }, 3000);
    }

    const addProductHandler = (product) => {
        console.log(product);
        productService
            .addProduct({ title: product, isiCompleted: false }, user.accessToken);
    }

    const deleteRecipeHandler = (id) => {
        recipeService.remove(id);
        navigate('/');
    }

    return (
        <>
            <section className={styles["header"]}>
                {isLoading && <Spinner />}
                <article>
                    <h1 className={styles["header__h1"]}>{recipe.name}</h1>
                </article>
                <article>
                    <q className={styles["header__descr"]}>
                        {recipe.description}
                    </q>
                    <p className={styles["creation-date"]}>Created on: {recipeService.formatDate(recipe._createdOn)} </p>
                </article>
            </section>
            <section className={styles["hero"]}>
                <article className={`${styles["content"]} ${styles["dspl-flex-col-center"]}`}>
                    <div className={`${styles["user__details"]} ${styles["dspl-flex-col-center"]}`}>
                        <div className={styles["img-holder"]}>
                            <img
                                className={styles["user__image"]}
                                src={recipe.user && recipe.user.imageUrl}
                                alt=""
                            />
                        </div>
                        <div>
                            <p>{recipe.user && recipe.user["full-name"]}</p>

                        </div>
                        <div className={`${styles["user__stats"]} ${styles["dspl-flex-row-center"]}`}>
                            <div className={styles["stats__wrapper"]}>
                                <FontAwesomeIcon className={styles["icon"]} icon={faUtensils}></FontAwesomeIcon>
                                <p>31</p>
                            </div>
                            <div className={styles["stats__wrapper"]}>
                                <FontAwesomeIcon className={styles["icon"]} icon={faCamera}></FontAwesomeIcon>
                                <p>220</p>
                            </div>
                            <div className={styles["stats__wrapper"]}>
                                <FontAwesomeIcon className={styles["icon"]} icon={faFireBurner}></FontAwesomeIcon>
                                <p>31</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["user__icons"]}>
                        {
                            isOwner &&
                            <div className={styles["main-wrap"]}>
                                <div className={styles["wrapper"]}>
                                    <Link to={`/edit/${recipe._id}`} className={styles["btn"]}>
                                        <FontAwesomeIcon className={styles["icon"]} icon={faPenToSquare}></FontAwesomeIcon>
                                    </Link>
                                    <span>Edit</span>
                                </div>
                                <div className={styles["wrapper"]}>
                                    <button
                                        className={styles["btn"]}
                                        onClick={() => deleteRecipeHandler(recipeId)}>
                                        <FontAwesomeIcon className={styles["icon"]} icon={faTrashCan}></FontAwesomeIcon>
                                    </button>
                                    <span>Delete</span>
                                </div>
                            </div>
                        }

                        {!isOwner &&
                            <div className={styles["main-wrap"]}>
                                <div className={styles["wrapper"]}>
                                    <button
                                        className={`${styles["btn"]} ${styles[className]}`}
                                        onClick={() => addToFavoritesHandler(recipe)}
                                        disabled={savedToFavorites}>
                                        <FontAwesomeIcon className={styles["icon"]} icon={faHeart}></FontAwesomeIcon>
                                    </button>
                                    <span>Favorites</span>
                                </div>
                            </div>}
                    </div>
                </article>
                <article className={`${styles["article-img-icons"]} ${styles["mrgn-auto"]}`} >
                    <div className={`${styles["icons"]} ${styles["dspl-flex-row-center"]}`}>
                        <div className={`${styles["wrapper"]} ${styles["dspl-flex-col-center"]}`}>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                            <span>Prep time: {recipe['prep-time']} min</span>
                            <p />
                        </div>
                        <div className={`${styles["wrapper"]} ${styles["dspl-flex-col-center"]}`}>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                            <span>Cook time: {recipe['cook-time']} min </span>
                            <p />
                        </div>
                        <div className={`${styles["wrapper"]} ${styles["dspl-flex-col-center"]}`}>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                            <span>Total time: {Number(recipe['prep-time']) + Number(recipe['cook-time'])} min </span>
                            <p />
                        </div>
                        <div className={`${styles["wrapper"]} ${styles["dspl-flex-col-center"]}`}>
                            <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>
                            <span>Portions: {recipe.portions} </span>
                            <p />
                        </div>
                    </div>
                    <Gallery images={recipe.links} />
                </article>

            </section>

            <section className={styles["products-section"]}>
                <ul className={`${styles["products"]} ${styles["mrgn-auto"]}`}>
                    {isAlertVisible &&
                        <div className={styles['alert-container']}>
                            <div className={styles['alert-inner']}>Added to shopping list!</div>
                        </div>}
                    <h2 className={styles["products-title"]}>Needed Products</h2>

                    {recipe.products &&
                        recipe.products.map(p =>
                            <ProductItem
                                key={uuid()}
                                product={p}
                                icon={faPlus}
                                addProduct={addProductAndCallAlert}
                            />
                        )
                    }
                </ul>
            </section>

            <section>
                <div className={styles["cooking-process"]}>
                    <h2 className={styles["title"]}>How to cook</h2>

                    {
                        recipe.steps &&
                        <ul className={styles["steps-list"]}>
                            {recipe.steps.map(r =>
                                <li
                                    className={styles["cooking-step"]}
                                    key={uuid()}>{r}
                                </li>)}
                        </ul>
                    }

                </div>
            </section>
        </>
    );
}

