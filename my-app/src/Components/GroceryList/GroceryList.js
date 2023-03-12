import styles from './GroceryList.module.css';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import * as recipeService from '../../service/recipeService.js'

import { useState, useEffect } from 'react';

export const GroceryList = () => {
    const [products, setProducts] = useState([]);

    const { user } = useContext(AuthContext);
    
    console.log(products);

    useEffect(() => {
        recipeService
            .findProductsByUserid('847ec027-f659-4086-8032-5173e2f9c93a')
            .then(result => setProducts(result[0]));
    }, [])

    return (
        <>
            <div className={styles["background"]}>
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
            </div>
        </>
    );
}