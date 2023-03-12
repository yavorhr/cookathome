import styles from './GroceryList.module.css';

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import * as productsService from '../../service/productsService.js'

import { FoodItem } from './FoodItem/FoodItem.js';

export const GroceryList = () => {
    const [products, setProducts] = useState([]);

    console.log(products);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        productsService
            .findProductsByUserid(user._id)
            .then(result => setProducts((result)));
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const product = Object.fromEntries(new FormData(e.target));

        productsService
            .addProduct(product, user.accessToken)
            .then(result =>
                setProducts(state =>
                    [...state,
                    { ...result, isCompleted: false }])
            );
        e.target.reset();
    }

    const deleteProductHandler = (productId) => {
        productsService
            .deleteProduct(productId, user.accessToken)
            .then(result =>
                setProducts(state =>
                    state.filter(p => p._id != productId)))
    }

    const onToggleHandler = (product) => {
        const isCompleted = !product.isCompleted;
        const updatedProduct = { ...product, isCompleted: isCompleted }

        productsService
            .updateProduct(product._id, updatedProduct, user.accessToken)
            .then(result => {
                setProducts(state => state.map(p => p._id == product._id ? result : p))
            })
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
                                id="title"
                                placeholder="Enter task" />
                            <button className={styles["add-task"]}>Add</button>
                        </form>
                    </div>
                    <ul className={styles["groceries"]}>
                        {products
                            .map(p =>
                                <FoodItem
                                    key={p._id}
                                    product={p}
                                    onDeleteProduct={deleteProductHandler}
                                    onToggle={onToggleHandler} >
                                </FoodItem>)
                        }
                    </ul>
                </section>
            </div>
        </>
    );
}