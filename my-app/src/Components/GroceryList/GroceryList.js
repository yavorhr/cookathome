import styles from './GroceryList.module.css';

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import * as recipeService from '../../service/recipeService.js'

import { FoodItem } from './FoodItem/FoodItem.js';

export const GroceryList = () => {
    const [products, setProducts] = useState([]);

    const { user } = useContext(AuthContext);

    console.log(products);

    useEffect(() => {
        recipeService
            .findProductsByUserid(user._id)
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
                        {products.map(p => <FoodItem id={p._id} product={p}></FoodItem>)}
                    </ul>
                </section>
            </div>
        </>
    );
}