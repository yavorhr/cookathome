import styles from './Search.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext.js';
import { Pagination } from '../common/Pagination/Pagination.js';

import { CardItem } from '../Profile/CardItem/CardItem.js';

export const Search = () => {
    const { recipes } = useContext(RecipeContext);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(4);

    // Get current posts
    const lastIndex = currentPage * recipesPerPage;
    const startIndex = lastIndex - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(startIndex, lastIndex);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const onChange = (e) => {
        setSearchValue(e.target.value)
    }

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

    return (
        <>
            <article className={styles["search-bar"]}>
                <h1 className={styles["title"]}>What are you looking for ?</h1>
                <p className={styles["descr"]}>Please enter the desired recipe or part of it, and we will find all relevant suggestions for you</p>
                <form action=""
                    onSubmit={onSearchSubmit}>
                    <input type="text"
                        placeholder="Search here..."
                        name="search"
                        value={searchValue}
                        onChange={onChange} />
                    <button type="submit">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className={styles["icon"]} />
                    </button>
                </form>
            </article>

            <ul className={styles["list-recipes"]}>
                {
                    currentRecipes.map(r =>
                        <CardItem key={r._id} recipe={r} />)
                }
            </ul>

            <Pagination
                recipesPerPage={recipesPerPage}
                totalRecipes={filteredRecipes.length}
                paginate={paginate}
                currentPage={currentPage} />
        </>

    );



}

