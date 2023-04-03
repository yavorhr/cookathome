import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';

export const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    const onSearchSubmit = (e) => {
        e.preventDefault();

        const { search } = Object.fromEntries(new FormData(e.target));
        console.log(search);
    }

    const onChange = (e) => {
        setSearchValue(e.target.value)
    }

    
    return (
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
        </article>);
}