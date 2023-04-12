import styles from './CatalogRecipes.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as recipeService from "../../service/recipeService.js";

import { CardItem } from '../Profile/CardItem/CardItem.js';
import { Pagination } from '../common/Pagination/Pagination.js';

export const CatalogRecipes = ({ }) => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const { category, type } = useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(1);

    useEffect(() => {
        recipeService
            .getRecipesByCategoryAndType(category, type)
            .then(result => {
                setRecipes(result)
                setFilteredRecipes(result)
            })
    }, [category, type]);

    const onSearchSubmit = (e) => {
        e.preventDefault();

        const { search } = Object.fromEntries(new FormData(e.target));

        setFilteredRecipes(recipes
            .filter(r =>
                r.name
                    .toLowerCase()
                    .includes(search.toLowerCase())));
        setCurrentPage(1);

        setSearchValue('');
    }

    // Get current posts
    const lastIndex = currentPage * recipesPerPage;
    const startIndex = lastIndex - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(startIndex, lastIndex);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <section>
            <article>
                {recipes.length > 0 &&
                    <>
                        <h2 className={styles["section-title"]}>{type} recipes</h2>
                        <form className={styles["search-form"]} action="" onSubmit={onSearchSubmit}>
                            <input
                                type="text"
                                name="search"
                                placeholder="Search here..."
                                id="search" />
                            <button type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["icon"]}></FontAwesomeIcon>
                            </button>
                        </form>

                        <ul className={styles["card-list"]} type="none">
                            {
                                currentRecipes.map(r =>
                                    <CardItem recipe={r} key={r._id} />)
                            }
                        </ul>

                        <Pagination
                            recipesPerPage={recipesPerPage}
                            totalRecipes={filteredRecipes.length}
                            paginate={paginate}
                            currentPage={currentPage} />
                    </>
                }
            </article>
        </section >
    );
}

