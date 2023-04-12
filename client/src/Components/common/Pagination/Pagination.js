

import styles from './Pagination.module.css';

export const Pagination = ({ recipesPerPage, totalRecipes, paginate, currentPage }) => {
    const pageNumbers = [];

    // Pages count
    for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={styles["pagination"]} type="none">
                {pageNumbers.map(page => (
                    <li className={styles["page-item"]} key={page}>
                        <button              
                            onClick={() => paginate(page)}
                            className={page == currentPage ? styles["active"] : ''}>
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}