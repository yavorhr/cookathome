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
                            const newString = stringManipulation(string);
                            const stringWithoutDashes = newString.replaceAll('-', ' ');

                            return <Link
                                key={string}
                                onClick={() =>
                                    onClickHandler(false)}
                                to={string}
                                className={styles['nav-link']}>
                                {stringWithoutDashes}
                            </Link>
                        })
                }
            </div>
        </div>
    );
}

const stringManipulation = (string) => {
    let string2 = '';
    if (string.includes('articles')) {
        const capitalLetter = string.charAt(18).toUpperCase();
        string2 = capitalLetter + string.slice(19);
    } else {
        const capitalLetter = string.charAt(17).toUpperCase();
        string2 = capitalLetter + string.slice(18);
    }
    return string2;
}