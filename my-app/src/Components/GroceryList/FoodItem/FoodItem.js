import styles from './FoodItem.module.css';

export const FoodItem = () =>{
    return (
        <li className={styles["food-item"]}>
        <p>Tomatoes</p>
        <button className={styles["food-item__task-btn"]} >X</button>
    </li>
    );
}