import styles from './DropdownHeading.module.css';
import { Link } from 'react-router-dom';

export const DropdownHeading = ({
    obj,
    onClickHandler }) => {

    return (
        <div className={styles["dropdown-heading"]}>
            <span>{Object.keys(obj)}</span>
            <div className={styles["dropdown-links"]}>
                {
                    obj[Object.keys(obj)]
                        .map(string => {
                            const recipeTitle = recipeTitleManipulation(string, '/', 3);

                            return (
                                <Link
                                    key={string}
                                    onClick={() => onClickHandler(false)}
                                    to={string}
                                    className={styles['nav-link']}> {recipeTitle}
                                </Link>)
                        })
                }
            </div>

        </div>
    );
}

function recipeTitleManipulation(string, subString, index) {
    const startIndex = string.split(subString, index).join(subString).length;
    const newString = string.slice(startIndex + 1);

    const stringWithoutDashes = newString.replaceAll('-', ' ');
    const capitalizedString = stringWithoutDashes.charAt(0).toUpperCase() + stringWithoutDashes.slice(1);

    return capitalizedString;
}
