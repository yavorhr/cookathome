

import styles from './Pagination.module.css';
import { Link } from 'react-router-dom';

export const Pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <u>
                {pageNumbers.map(number => (
                    <li className={styles["page-item"]} key={number}>
                        <Link onClick={() => paginate(number)} to="#" className={styles["page-link"]}>
                            {number}
                        </Link>
                    </li>
                ))}
            </u>
        </nav>
    )
}