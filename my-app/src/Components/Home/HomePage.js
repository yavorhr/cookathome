import styles from './HomePage.module.css';
import * as recipeService from '../service/recipeService.js';
import { useState, useEffect } from 'react';

export const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(result => setRecipes(result))
    }, []);

    return (
        <>
            <section className={styles["gallery"]}>
                <ul type="none">
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/dishes/eggsausage.jpg" alt="recipe details" />
                            <div className={styles["article-item__info"]}>
                                <h3>Egg & Sausage</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/dishes/eggsausage.jpg" alt="recipe details" />
                            <div className={styles["article-item__info"]}>
                                <h3>Egg & Sausage</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/dishes/eggsausage.jpg" alt="recipe details" />
                            <div className={styles["article-item__info"]}>
                                <h3>Egg & Sausage</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/dishes/eggsausage.jpg" alt="recipe details" />
                            <div className={styles["article-item__info"]}>
                                <h3>Egg & Sausage</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/dishes/eggsausage.jpg" alt="recipe details" />
                            <div className={styles["article-item__info"]}>
                                <h3>Egg & Sausage</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>

            <section className={styles['hero']}>
                <div className={styles["today-recipe"]}>
                    <div className={styles["today-recipe__img-holder"]}>
                        <img src="/img/dishes/eggsausage.jpg" alt="" />
                    </div>
                    <article>
                        <p className={styles["today-recipe__title"]}>Vegeterian Dinner </p>
                        <h2>Roasted Eggplant and Butternut Suqash</h2>
                        <p className={styles["today-recipe__descr"]}>Dignissimos culpa aliquid ad nulla nemo, esse unde iusto beatae facilis
                            quia, minima assumenda.</p>
                        <a href="">Get the recipe</a>
                    </article>
                </div>
                <div className={styles["recipe-by-user"]}>
                    <ul type="none">
                        <li>
                            <article>
                                <img src="https://images.healthshots.com/healthshots/en/uploads/2022/09/14175516/financially-independent-1600x900.jpg">
                                </img>
                                <div className={styles["recipe-by-user__info"]}>
                                    <a href="">Albena</a> sgotvi <a href="">Retro sladkish</a>
                                    <p>4 min ago</p>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <img src="https://images.healthshots.com/healthshots/en/uploads/2022/09/14175516/financially-independent-1600x900.jpg">
                                </img>
                                <div className={styles["recipe-by-user__info"]}>
                                    <a href="">Albena</a> sgotvi <a href="">Retro sladkish</a>
                                    <p>4 min ago</p>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <img src="https://images.healthshots.com/healthshots/en/uploads/2022/09/14175516/financially-independent-1600x900.jpg">
                                </img>
                                <div className={styles["recipe-by-user__info"]}>
                                    <a href="">Albena</a> sgotvi <a href="">Retro sladkish</a>
                                    <p>4 min ago</p>
                                </div>
                            </article>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles["latest-recipes"]}>
                <nav>
                    <ul type="none">
                        <span>New recipes</span>
                        <li>
                            <a href="">All</a>
                        </li>
                        <li>
                            <a href="">Salads</a>
                        </li>
                        <li>
                            <a href="">Main</a>
                        </li>
                        <li>
                            <a href="">Pre-dish</a>
                        </li>

                        <li>
                            <a href="">Soups</a>
                        </li>

                        <li>
                            <a href="">Fish</a>
                        </li>

                        <li>
                            <a href="">Vegan</a>
                        </li>
                    </ul>
                </nav>

                <ul className={styles["latest-recipes__grid"]} type="none">
                    <li className={styles["recipe-card"]}>
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className={styles["recipe-card__info"]}>
                            <h3> <a href="">Гризини</a> </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                    <li className={styles["recipe-card"]}>
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className={styles["recipe-card__info"]}>
                            <h3> <a href="">Гризини</a> </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                    <li className={styles["recipe-card"]}>
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className={styles["recipe-card__info"]}>
                            <h3> <a href="">Гризини</a> </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                    <li className={styles["recipe-card"]}>
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className={styles["recipe-card__info"]}>
                            <h3> <a href="">Гризини</a> </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                    <li className={styles["recipe-card"]}>
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className={styles["recipe-card__info"]}>
                            <h3> <a href="">Гризини</a> </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                    <li className={styles["recipe-card"]}>
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className={styles["recipe-card__info"]}>
                            <h3> <a href="">Гризини</a> </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                    <li className={styles["recipe-card"]}>
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className={styles["recipe-card__info"]}>
                            <h3><a href="">Гризини</a>
                            </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}