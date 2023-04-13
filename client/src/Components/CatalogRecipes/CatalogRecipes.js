import styles from './CatalogRecipes.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as recipeService from "../../service/recipeService.js";

import { CardItem } from '../Profile/CardItem/CardItem.js';
import { Pagination } from '../common/Pagination/Pagination.js';
import { Spinner } from '../common/Spinner/Spinner.js';

export const CatalogRecipes = ({ }) => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [search, setSearch] = useState();


    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(5);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        recipeService
            .getAll()
            .then(result => {
                setRecipes(result);
                setFilteredRecipes(result);
                setIsLoading(false);
            })
    }, []);


    // Get current posts
    const lastIndex = currentPage * recipesPerPage;
    const startIndex = lastIndex - recipesPerPage;
    const currentRecipes = recipes.slice(startIndex, lastIndex);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <section>
            <article>
                {isLoading && <Spinner />}
                {recipes.length > 0 &&
                    <>
                        <form className={styles["search-form"]} action="">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search here..."
                                id="search"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>

                        <ul className={styles["card-list"]} type="none">
                            {
                                currentRecipes.map(r =>
                                    <CardItem
                                        recipe={r}
                                        key={r._id} />)
                            }
                        </ul>

                        <Pagination
                            recipesPerPage={recipesPerPage}
                            totalRecipes={recipes.length}
                            paginate={paginate}
                            currentPage={currentPage} />
                    </>
                }
            </article>
        </section >
    );
}

