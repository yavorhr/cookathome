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
    const [search, setSearch] = useState('');
    const [sortValue, setSortValue] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(5);
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
            name: recipeService.sortRecipesByNameAsc(array, length),
            calories: recipeService.sortRecipebyCalories(array, length)
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
            .then(result => setRecipes(result.filter(r => r.name.toLowerCase().includes(search.toLocaleLowerCase()))));
        setSearch('');
    }

    const handleReset = () => {
        recipeService.getAll().then(result => setRecipes(result))
    }

    const handleSort = (e) => {
        let value = e.target.value;
        setSortValue(value);
        setRecipes(state => functions(state, state.length, value));
    }

    return (
        <section>
            <article>
                {isLoading && <Spinner />}
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
                    <button type="submit" >Search</button>
                    <button type="submit" onClick={() => handleReset()}>Reset</button>
                </form>
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
                {/* <Pagination
                            recipesPerPage={recipesPerPage}
                            totalRecipes={recipes.length}
                            paginate={paginate}
                            currentPage={currentPage} /> */}


            </article>
            <article>
                <h5>Sort By:</h5>
                <select
                    name=""
                    id=""
                    onChange={handleSort}
                    value={sortValue}
                >
                    <option value="">Please select</option>
                    {sortOptions.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </article>
        </section >
    );
}

