import styles from './HomePage.module.css';
import { useFetch } from '../hooks/useFetch.js';

import { GalleryArticles } from './GalleryArticles/GalleryArticles.js';
import { TodayRecipe } from './TodayRecipe/TodayRecipe.js';
import { RecipeByUser } from './RecipeByUser/RecipeByUser.js';
import { Nav } from './RecentyAddedRecipes/Navigation/Nav.js';

export const HomePage = () => {
    const [recipes, setRecipes] = useFetch("http://localhost:3030/data/recipes", []);
    const [articles, setArticles] = useFetch("http://localhost:3030/data/articles", []);

    return (
        <>
            <GalleryArticles articles={articles} />

            <section className={styles['hero']}>
                <TodayRecipe recipes={recipes} />
                <RecipeByUser recipes={recipes} />
            </section>

            <section className={styles["latest-recipes"]}>
                <Nav/>

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