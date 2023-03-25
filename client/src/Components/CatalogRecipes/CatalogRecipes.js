import styles from './CatalogRecipes.module.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as recipeService from "../../service/recipeService.js";



import { CardItem } from '../Profile/CardItem/CardItem.js';
import { Search } from '../Search/Search.js';

export const CatalogRecipes = ({ }) => {
    const [recipes, setRecipes] = useState([]);
    const { category, type } = useParams();

    useEffect(() => {
        recipeService
            .getRecipesByCategoryAndType(category, type)
            .then(result => setRecipes(result))
    }, [category, type]);

    return (
        <section>
            
            <Search/>

            <article>
                {recipes.length > 0 && 
                    <>
                        <h2 className={styles["section-title"]}>Recently added</h2>
                        <ul className={styles["card-list"]} type="none">
                            {recipes.map(r => <CardItem recipe={r} key={r._id} />)}
                        </ul>
                    </>
                }
            </article>
        </section >
    );
}