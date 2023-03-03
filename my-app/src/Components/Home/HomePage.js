import styles from './HomePage.module.css';
import { useFetch } from '../hooks/useFetch.js';

import { GalleryArticles } from './GalleryArticles/GalleryArticles.js';
import { TodayRecipe } from './TodayRecipe/TodayRecipe.js';
import { RecipeByUser } from './RecipeByUser/RecipeByUser.js';
import { Navigation } from './RecentyAddedRecipes/Navigation/Navigation.js';
import { NewestRecipes } from './RecentyAddedRecipes/NewestRecipes/NewestRecipes.js';

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
                <Navigation />

                <NewestRecipes recipes={recipes} />
            </section>
        </>
    )
}