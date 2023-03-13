import styles from './ProductItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProductItem = ({icon, addProduct, product}) => {
    <li className={styles["food-item"]}>
        <p>{product.title}</p>
        <div className={styles['btn-wrapper']}>
            <button className={styles["add"]} onClick={(e) => addProduct(e)}>
                <FontAwesomeIcon className={styles["icon"]} icon={icon}></FontAwesomeIcon>
            </button>
        </div>
    </li>
}