

import styles from './Search.module.css';
import { useState } from "react";
import { ReactComponent as Search } from '../../svg/search.svg';


export const SearchComponent = () => {
    const [clicked, setClicked] = useState(false);

    const setClickHandler = () => {
        setClicked(!clicked)
    }

    return (
        <div className={styles["search-comp"]}>
            {clicked && <form action="">
                <input type="text" />
            </form>}

            <li className={styles["nav-item"]}>
                <a href="#" className={styles["icon-button"]} onClick={() => setClickHandler()} >
                    <Search />
                </a>
            </li>
        </div>);
}