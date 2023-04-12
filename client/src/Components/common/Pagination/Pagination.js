

import styles from './Pagination.module.css';
import { Link } from 'react-router-dom';

export const Pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={styles["pagination"]} type="none">
                {pageNumbers.map(number => (
                    <li className={styles["page-item"]} key={number}>
                        <button onClick={() => paginate(number)} to="#" className={styles["page-link"]}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}