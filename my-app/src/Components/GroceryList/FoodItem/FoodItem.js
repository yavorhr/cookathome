import styles from './FoodItem.module.css';

export const FoodItem = ({
    product
}) =>{
    return (
        <li className={styles["food-item"]}>
        <p>{product.name}</p>
        <button className={styles["food-item__task-btn"]} >X</button>
    </li>
    );
}