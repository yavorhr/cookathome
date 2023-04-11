import styles from './HomePage.module.css';

import { GalleryRecipes } from './GalleryRecipes/GalleryRecipes.js';
import { TodayRecipe } from './TodayRecipe/TodayRecipe.js';
import { RecipeByUser } from './RecipeByUser/RecipeByUser.js';
import { NewestRecipes } from './RecentyAddedRecipes/NewestRecipes/NewestRecipes.js';

export const HomePage = ({
   recipes }) => {

    return (
        <>
            <GalleryRecipes recipes={recipes} />
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