import styles from './Search.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext.js';

import { CardItem } from '../Profile/CardItem/CardItem.js';

export const Search = () => {
    const { recipes } = useContext(RecipeContext);
    const [searchValue, setSearchValue] = useState('');

    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const onChange = (e) => {
        setSearchValue(e.target.value)
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();

        const { search } = Object.fromEntries(new FormData(e.target));

        setFilteredRecipes(recipes.filter(r => r.name.toLowerCase().includes(search.toLowerCase())));
        setSearchValue('');
    }

    return (
        <>
            <article className={styles["search-bar"]}>
                <h1 className={styles["title"]}>What are you looking for ?</h1>
                <p className={styles["descr"]}>Please enter the desired recipe or part of it, and we will find all relevant suggestions for you</p>
                <form action="" onSubmit={onSearchSubmit}>
                    <input type="text"
                        placeholder="Search here..."
                        name="search"
                        value={searchValue}
                        onChange={onChange} />
                    <button type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["icon"]}></FontAwesomeIcon>
                    </button>
                </form>
            </article>

            {
                filteredRecipes &&
                <ul className={styles["list-recipes"]}>
                    {filteredRecipes.map(r => <CardItem key={r._id} recipe={r}></CardItem>)}
                </ul>
            }
        </>

    );



}

