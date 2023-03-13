import styles from './FoodItem.module.css';

export const FoodItem = ({
    product,
    onToggle,
    onDeleteProduct
}) => {

    const className = [
        product.isCompleted
            ? 'completed'
            : '',
    ];

    return (
        <li
            className={styles["food-item"]}>
            <p className={styles[className]} onClick={() => onToggle(product)}>{product.title}</p>
            <button
                className={styles["food-item__task-btn"]}
                onClick={() => onDeleteProduct(product._id)}>X
            </button>
        </li >
    );
}