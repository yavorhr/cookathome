import styles from './DropdownMenu.module.css';
import { Link } from 'react-router-dom';

export const DropdownMenu = (props) => {

    return (
        <div className={styles["dropdown"]} >
            <div className={`${styles["dropdown-content"]} ${styles["information-grid"]}`}>

                {props.data.map(d =>
                    <div className={styles["dropdown-heading"]} key={Object.keys(d)}>
                        <span>{Object.keys(d)}</span>
                        <div className={styles["dropdown-links"]}>
                            {
                                d[Object.keys(d)]
                                    .map(string => {
                                        let string2 = '';
                                        if (string.includes('articles')) {
                                            const capitalLetter = string.charAt(18).toUpperCase();
                                            string2 = capitalLetter + string.slice(19);
                                        } else {
                                            const capitalLetter = string.charAt(17).toUpperCase();
                                            string2 = capitalLetter + string.slice(18);
                                        }

                                        let string3 = string2.replaceAll('-', ' ');
                                 

                                        return <Link
                                            key={string}
                                            onClick={() =>
                                                props.onClickHandler(false)}
                                            to={string}
                                            className={styles['nav-link']}>
                                            {string3}
                                        </Link>

                                    })
                            }
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}