import styles from './CatalogRecipes.module.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as recipeService from "../../service/recipeService.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CardItem } from '../Profile/CardItem/CardItem.js';

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
            <article className={styles["search-bar"]}>
                <h1 className={styles["title"]}>What are you looking for ?</h1>
                <p className={styles["descr"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ad debitis tempore, incidunt
                    eveniet
                    voluptas at modi consequatur libero dolorem, mollitia delectus, voluptate laudantium sapiente explicabo
                    aut distinctio? Quos, sunt.</p>
                <form action="">
                    <input type="text" placeholder="Search your recipe..." name="" />
                    <button type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["icon"]}></FontAwesomeIcon>
                    </button>
                </form>
            </article>

            <article>
                {recipes.length > 0
                    ?
                    <>
                        <h2 className={styles["section-title"]}>Recently added</h2>
                        <ul className={styles["card-list"]} type="none">
                            {recipes.map(r => <CardItem recipe={r} key={r._id} />)}
                        </ul>
                    </>
                    : <h2 className={styles["recipes-title"]} >You have no recipes yet</h2>
                }
            </article>
        </section >
    );
}