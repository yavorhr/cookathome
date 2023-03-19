import styles from './RecipeDetails.module.css';
import uuid from 'react-uuid';

import * as recipeService from '../../service/recipeService.js';
import * as productService from '../../service/productsService.js'
import * as favoriteService from '../../service/favoriteService.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCamera, faFireBurner, faPenToSquare, faTrashCan, faHeart, faClock, faPlus, } from '@fortawesome/free-solid-svg-icons'

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

import { ProductItem } from './ProductItem/ProductItem.js';

/*TODO : To chane fab icons with svg icons */
export const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [savedToFavorites, setSavedToFavorites] = useState(false);

    const { recipeId } = useParams();
    const { user } = useContext(AuthContext);
    const accessToken = user.accessToken;

    useEffect(() => {

        const getRecipeById =
            recipeService
                .getById(recipeId);

        // Check if User has already add to favarites
        const checkFavoriteRecipesByUserId =
            favoriteService.findRecipesByUserId(user._id);

        Promise
            .all([getRecipeById, checkFavoriteRecipesByUserId])
            .then(data => {
                setRecipe(data[0]);

                const allFavoriteRecipes = data[1];

                allFavoriteRecipes.length > 0
                    && allFavoriteRecipes
                        .some(recipe =>
                            recipe.recipeId == recipeId)
                    && setSavedToFavorites(true)

            })
    }, [])

    // Add style if user already added the current recipe to favorites
    let className = "";
    if (savedToFavorites) {
        className = "saved-favorites"
    } else {
        className = "";
    }

    const addToFavorites = (recipe, accessToken) => {
        console.log(recipe);
        favoriteService
            .addToFavorites(
                {
                    recipeId: recipe._id,
                    name: recipe.name,
                    description: recipe.description,
                    imageUrl: recipe.imageUrl,
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
        recipeService.deleteRecipeByid(id, accessToken);

    }

    return (
        <>
            <section className={styles["header"]}>
                <article>
                    <h1 className={styles["header__h1"]}></h1>
                </article>
                <article>
                    <q className={styles["header__descr"]}>
                        {recipe.description}
                    </q>
                </article>
            </section>
            <section className={styles["hero"]}>
                <article className={`${styles["content"]} ${styles["dspl-flex-col-center"]}`}>
                    <div className={`${styles["user__details"]} ${styles["dspl-flex-col-center"]}`}>
                        <div className={styles["img-holder"]}>
                            <img
                                className={styles["user__image"]}
                                src="https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d"
                                alt=""
                            />
                        </div>
                        <div>
                            <p>Ivan Ivanov</p>
                            <p>Beginner</p>
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
                        <div className={styles["main-wrap"]}>
                            <div className={styles["wrapper"]}>
                                <button className={styles["btn"]}>
                                    <FontAwesomeIcon className={styles["icon"]} icon={faPenToSquare}></FontAwesomeIcon>
                                </button>
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
                        <div className={styles["main-wrap"]}>
                            <div className={styles["wrapper"]}>
                                <button
                                    className={`${styles["btn"]} ${styles[className]}`}
                                    onClick={() => addToFavorites(recipe, accessToken)}
                                    disabled={savedToFavorites}>
                                    <FontAwesomeIcon className={styles["icon"]} icon={faHeart}></FontAwesomeIcon>
                                </button>
                                <span>Favorites</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className={`${styles["article-img-icons"]} ${styles["mrgn-auto"]}`}>
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
                    <div className={styles["image-grid"]}>
                        <img
                            className={`${styles["image-grid-col-2"]} ${styles["image-grid-row-2"]}`}
                            src={recipe.imageUrl}
                            alt="recipe details"
                        />
                        <img src="" alt="recipe details" />
                        <img src="" alt="recipe details" />
                        <img src="" alt="recipe details" />
                        <div className={`${styles["add-image-container"]} ${styles["mrgn-auto"]} ${styles["dspl-flex-col-center"]}`}>
                            <label htmlFor="images">+ Add images</label>
                            <br />
                            <span>up to 4 images</span>
                            <input type="file" name="images" className="add-img" />
                        </div>
                    </div>
                </article>
            </section>

            <section className={styles["products-section"]}>
                <ul className={`${styles["products"]} ${styles["mrgn-auto"]}`}>
                    {isAlertVisible &&
                        <div className={styles['alert-container']}>
                            <div className={styles['alert-inner']}>Added to shopping list!</div>
                        </div>}
                    <h2 className={styles["title"]}>Products</h2>

                    {(recipe.products &&
                        recipe.products.map(p =>
                            <ProductItem
                                key={uuid()}
                                product={p}
                                icon={faPlus}
                                addProduct={addProductAndCallAlert}
                            />
                        ))
                    }
                </ul>
            </section>

            <section>
                <div className={styles["cooking-process"]}>
                    <h2 className={styles["title"]}>How to cook</h2>
                    <p>
                        {
                            recipe.steps
                        }
                    </p>
                </div>
            </section>
        </>
    );
}

