import styles from './GroceryList.module.css';

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import * as productsService from '../../service/productsService.js'

import { FoodItem } from './FoodItem/FoodItem.js';

export const GroceryList = () => {
    const [products, setProducts] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        productsService
            .findProductsByUserid(user._id)
            .then(result => setProducts((result)));
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const product = Object.fromEntries(new FormData(e.target));

        productsService
            .addTask(product, user.accessToken)
            .then(result =>
                setProducts(state =>
                    [...state,
                        result])
            );
        e.target.reset();
    }

    return (
        <>
            <div className={styles["background"]}>
                <section className={styles["grocery-list"]}>
                    <div className={styles["new-task"]}>
                        <form onSubmit={onSubmitHandler}>
                            <input
                                type="text"
                                name="title"
                                id="task"
                                placeholder="Enter task" />
                            <button className={styles["add-task"]}>Add</button>
                        </form>
                    </div>
                    <ul className={styles["groceries"]}>
                        {products
                            .map(p =>
                                <FoodItem
                                    key={p._id}
                                    product={p}>
                                </FoodItem>)
                        }
                    </ul>
                </section>
            </div>
        </>
    );
}