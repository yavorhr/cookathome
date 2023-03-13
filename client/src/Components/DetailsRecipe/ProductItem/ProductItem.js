import styles from './ProductItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProductItem = ({
    icon,
    product,
    addProduct }) => {
    return (<li className={styles["food-item"]}>
        <p>{product}</p>
        <div className={styles['btn-wrapper']}>
            <button className={styles["add"]} onClick={()=> addProduct(product)}>
                <FontAwesomeIcon className={styles["icon"]} icon={icon}></FontAwesomeIcon>
            </button>
        </div>
    </li>)
}