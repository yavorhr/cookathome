import styles from './GroceryList.module.css';

export const GroceryList = () => {

    return (
        <section className={styles["grocery-list"]}>
            <div className={styles["new-task"]}>
                <input type="text" name="" id="" placeholder="Enter task" />
                <button className={styles["add-task"]}>Add</button>
            </div>
            <ul className={styles["groceries"]}>
                <li className={styles["food-item"]}>
                    <p>Tomatoes</p>
                    <button className={styles["food-item__task-btn"]} >X</button>
                </li>
                <li className={styles["food-item"]}>
                    <p>Potatoes</p>
                    <button className={styles["food-item__task-btn"]} >X</button>
                </li>
                <li className={styles["food-item"]}>
                    <p>Carrots</p>
                    <button className={styles["food-item__task-btn"]} >X</button>
                </li>
                <li className={styles["food-item"]}>
                    <p>Cucum</p>
                    <button className={styles["food-item__task-btn"]} >X</button>
                </li>
            </ul>
        </section>

    );
}