import styles from './GroceryList.module.css';

import { useState, useEffect,useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import * as recipeService from '../../service/recipeService.js'

import { FoodItem } from './FoodItem/FoodItem.js';

export const GroceryList = () => {
    const [products, setProducts] = useState([]);

    const { user } = useContext(AuthContext);

    console.log(products);

    useEffect(() => {
        recipeService
            .findProductsByUserid('847ec027-f659-4086-8032-5173e2f9c93a')
            .then(result => setProducts((result)));
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
                       {Object.values(products).map(p => console.log(p))}
                    </ul>
                </section>
            </div>
        </>
    );
}