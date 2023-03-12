import styles from './FoodItem.module.css';

export const FoodItem = ({
    product,
    onToggle,
    onDeleteProduct
}) => {
    return (
        <li
            className={styles["food-item"]}
        >
            <p  onClick={() => onToggle(product)}>{product.title}</p>
            <button
                className={styles["food-item__task-btn"]}
                onClick={() => onDeleteProduct(product._id)}>X
            </button>
        </li>
    );
}