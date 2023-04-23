import styles from './ProductItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext.js';

export const ProductItem = ({
    icon,
    product,
    addProduct }) => {

    const { isAuthenticated } = useContext(AuthContext);


    return (
        <li className={styles["food-item"]}>
            <p>{product}</p>
            <div className={styles['btn-wrapper']}>

                {isAuthenticated &&
                    <button className={styles["add"]} onClick={() => addProduct(product)}>
                        <FontAwesomeIcon className={styles["icon"]} icon={icon}></FontAwesomeIcon>
                    </button>}

            </div>
        </li>
    )
};