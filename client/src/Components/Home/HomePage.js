import styles from './HomePage.module.css';

import { GalleryArticles } from './GalleryArticles/GalleryArticles.js';
import { TodayRecipe } from './TodayRecipe/TodayRecipe.js';
import { RecipeByUser } from './RecipeByUser/RecipeByUser.js';
import { NewestRecipes } from './RecentyAddedRecipes/NewestRecipes/NewestRecipes.js';

export const HomePage = ({
    articles,
    recipes }) => {

    
    return (
        <>
            <GalleryArticles articles={articles} />

            <section className={styles['hero']}>
                <TodayRecipe recipes={recipes} />
                <RecipeByUser recipes={recipes} />
            </section>

            <section className={styles["latest-recipes"]}>
                <NewestRecipes recipes={recipes} />
            </section>
        </>
    )
}