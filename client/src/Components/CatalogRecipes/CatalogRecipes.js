import styles from './CatalogRecipes.module.css';

import { useEffect, useState } from 'react';
import * as recipeService from "../../service/recipeService.js";

import { CardItem } from '../Profile/CardItem/CardItem.js';
import { Pagination } from '../common/Pagination/Pagination.js';
import { Spinner } from '../common/Spinner/Spinner.js';

export const CatalogRecipes = ({ }) => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [sortValue, setSortValue] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(4);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        recipeService
            .getAll()
            .then(result => {
                setRecipes(result);
                // setFilteredRecipes(result);
                setIsLoading(false);
            })
    }, []);

    const sortOptions = ["name", "calories", "level", "cook-time"];

    const functions = (array, length, value) => {
        const obj = {
            name: recipeService.sortByNameDesc(array, length),
            calories: recipeService.sortByCaloriesDesc(array, length),
            level: recipeService.sortByLevelDesc(array, length),
            ["cook-time"]: recipeService.sortByTimeDesc(array, length)
        }
        return obj[value];
    }

    // Get current posts
    const lastIndex = currentPage * recipesPerPage;
    const startIndex = lastIndex - recipesPerPage;
    const currentRecipes = recipes.slice(startIndex, lastIndex);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();

        const { search } = Object.fromEntries(new FormData(e.target));

        recipeService.getAll()
            .then(result => {
                setRecipes(result
                    .filter(r =>
                        r.name
                            .toLowerCase()
                            .includes(search.toLocaleLowerCase())));
            });

        setSearch('');
        setCurrentPage(1);
    }

    const handleReset = () => {
        recipeService
            .getAll()
            .then(result =>
                setRecipes(result))
    }

    const handleSort = (e) => {
        let value = e.target.value;
        setSortValue(value);

        if (value == "Please select") {
            return;
        }

        setRecipes(state => functions(state, state.length, value));
    }

    return (
        <section className={styles["catalog"]}>
            {isLoading && <Spinner />}
            <article className={styles["sort-search-article"]}>
                <article className={styles["sort-article"]}>
                    <span>Sort by:</span>
                    <select
                        name=""
                        id=""
                        onChange={handleSort}
                        value={sortValue}
                    >
                        <option value="Please select">Please select</option>
                        {sortOptions.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </select>
                </article>
                <form
                    className={styles["search-form"]}
                    action=""
                    onSubmit={onSearchSubmit}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search for a recipe name.."
                        id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className={styles["search-btn"]}>Search</button>
                    <button className={styles["reset-btn"]} type="submit" onClick={() => handleReset()}>Reset</button>
                </form>
            </article>

            <article>
                {recipes.length > 0
                    ?
                    <ul className={styles["card-list"]} type="none">
                        {
                            currentRecipes.map(r =>
                                <CardItem
                                    recipe={r}
                                    key={r._id} />)
                        }
                    </ul>
                    : <h1>No data</h1>
                }
                <Pagination
                    recipesPerPage={recipesPerPage}
                    totalRecipes={recipes.length}
                    paginate={paginate}
                    currentPage={currentPage} />
            </article>
        </section>

    );
}

