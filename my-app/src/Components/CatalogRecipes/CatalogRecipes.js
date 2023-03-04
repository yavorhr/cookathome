import styles from './CatalogRecipes.module.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { CatalogItem } from './CatalogItem/CatalogItem.js';

export const CatalogRecipes = ({ recipes }) => {

    const { season } = useParams();
    console.log(season);

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
            <h2 className={styles["section-title"]}>Recently added</h2>
            <ul className={styles["card-list"]} type="none">

                {recipes.map(r =>
                    <CatalogItem key={r._id} recipe={r} />)}

            </ul>
        </section>
    );
}