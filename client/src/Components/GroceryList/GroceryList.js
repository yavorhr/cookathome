import styles from './GroceryList.module.css';
import * as productsService from '../../service/productsService.js'

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

import { FoodItem } from './FoodItem/FoodItem.js';
import { Spinner } from '../common/Spinner/Spinner.js';

export const GroceryList = () => {
    const [products, setProducts] = useState([]);
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        productsService
            .getProductsByUserId(user._id)
            .then(result => setProducts((result)));

        setIsLoading(false);
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newProduct = Object.fromEntries(new FormData(e.target));

        productsService
            .addProduct(newProduct)
            .then(result =>
                setProducts(state =>
                    [...state,
                        result])
            );
        e.target.reset();
    }

    const deleteProductHandler = (productId) => {
        productsService
            .removeProduct(productId)
            .then(result =>
                setProducts(state =>
                    state.filter(p => p._id != productId)))
    }

    const onToggleHandler = (product) => {
        const isCompleted = !product.isCompleted;
        const updatedProduct = { ...product, isCompleted: isCompleted }

        productsService
            .updateProduct(product._id, updatedProduct)
            .then(result => {
                setProducts(state => state.map(p => p._id == product._id ? result : p))
            })
    }

    return (
        <div className={styles["background"]}>
            {isLoading && <Spinner />}
            <section className={styles["grocery-list"]}>
                <div className={styles["new-task"]}>
                    <form onSubmit={onSubmitHandler}>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter product" />
                        <button className={styles["add-task"]}>Add</button>
                    </form>
                </div>

                {products.length > 0 &&
                    <ul className={styles["groceries"]}>
                        {products.map(p =>
                            <FoodItem
                                key={p._id}
                                product={p}
                                onDeleteProduct={deleteProductHandler}
                                onToggle={onToggleHandler} >
                            </FoodItem>)}
                    </ul>
                }

            </section>
        </div>

    );
}