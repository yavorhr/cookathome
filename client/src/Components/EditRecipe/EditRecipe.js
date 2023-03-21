import styles from './EditRecipe.module.css';

import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import * as recipeService from "../../service/recipeService.js"
import { RecipeContext } from '../../context/RecipeContext.js';
import { AuthContext } from '../../context/AuthContext.js';

export const EditRecipe = () => {
    const [recipe, setRecipe] = useState({});
    const [invalidUserInput, setInvalidUserInput] = useState(false);
    const [errors, setErrors] = useState({});

    const { recipeId } = useParams();
    const { onRecipeEdit } = useContext(RecipeContext);
    const { user } = useContext(AuthContext);
    const accessToken = user.accessToken;

    const [values, setValues] = useState({
        title: '',
        descr: '',
        imageUrl: '',
        category: '',
        type: '',
        season: '',
        kitchen: '',
        ingredients: '',
        steps: '',
        calories: '',
        'prep-time': '',
        'cook-time': '',
        level: '',
        occasion: '',
        portions: '',
    });

    useEffect(() => {
        recipeService
            .getById(recipeId)
            .then(result => setRecipe(result));
    }, []);

    const onEditSubmitHandler = (e) => {
        e.preventDefault();

        const updatedRecipe = Object.fromEntries(new FormData(e.target));
        const invalidUserInput = Object.values(errors).some(e => Boolean(e))

        if (invalidUserInput) {
            setInvalidUserInput(true);
            return
        }

        setInvalidUserInput(false);

        recipeService.updateRecipe(recipeId, updatedRecipe, accessToken)
            .then(result => onRecipeEdit(recipeId, result));

    }

    const onChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const minLengthCheck = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < bound
        }))
        console.log(errors);
    }

    const validImageUrl = (e) => {
        const regex = new RegExp(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i);
        const urlInput = e.target.value;

        setErrors(state => ({
            ...state,
            [e.target.name]: !regex.test(urlInput)
        }))
    }

    const isPositive = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name] < 0 || isNaN(values[e.target.name])
        }))
    }

    return (
        <div className={styles["edit-recipe-background"]}>
            <section className={styles["edit--recipe__section"]}>
                <form
                    className={`${styles["mrgn-auto"]} ${styles["flex-col"]} ${styles["edit-recipe-form"]}`}
                    onSubmit={onEditSubmitHandler}>
                    <h1>Edit recipe</h1>
                    <div className={`${styles["title"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                        <label htmlFor="title">Recipe title</label>
                        <input
                            type="text"
                            placeholder="Enter the title"
                            name="title"
                            defaultValue={recipe.title}
                            onChange={onChangeHandler}
                            onBlur={(e) => minLengthCheck(e, 2)}
                        />
                        {errors.title && <p className={`${styles["error"]} ${styles["title"]}`}>Recipe name must be at least 2 characters!</p>}
                    </div>
                    <div className={`${styles["descr"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                        <label htmlFor="descr">Description</label>
                        <textarea
                            name="descr"
                            id=""
                            cols={10}
                            rows={10}
                            placeholder="Enter short description..."
                            defaultValue={recipe.descr}
                            onChange={onChangeHandler}
                            onBlur={(e) => minLengthCheck(e, 5)}
                        />
                        {errors.descr && <p className={`${styles["error"]} ${styles["descr"]}`}>Description name must be at least 5 characters!</p>}
                    </div>
                    <div className={`${styles["imageUrl"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                        <label htmlFor="imageUrl">Recipe URL image</label>
                        <input
                            type="text"
                            placeholder="Insert recipe url here..."
                            name="imageUrl"
                            value={values.imageUrl}
                            onChange={onChangeHandler}
                            onBlur={validImageUrl} />
                        {errors.imageUrl && <p className={`${styles["error"]} ${styles["imageUrl"]}`}>Please insert valid image url!</p>}
                    </div>
                    <div className={styles["group-wrapper"]}>
                        <div className={`${styles["category"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                            <label htmlFor="category">Category</label>
                            <select
                                type="text"
                                name="category"
                                onChange={onChangeHandler}>
                                <option
                                    defaultValue={recipe.category}>
                                    {recipe.category}
                                </option>
                                <option value="Pork meals">Pork meals</option>
                                <option value="Chicken meals">Pork meals</option>
                                <option value="Veggie meals">Veggie meals</option>
                            </select>
                        </div>
                        <div className={`${styles["type"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                            <label htmlFor="type">Type</label>
                            <select
                                type="text"
                                name="type"
                                onChange={onChangeHandler}>
                                <option
                                    defaultValue={recipe.type}>
                                    {recipe.type}
                                </option>
                                <option value="Lamb soup">Lamb soup</option>
                                <option value="Baclava">Baclava</option>
                                <option value="Babek">Babek</option>
                            </select>
                        </div>
                        <div className={`${styles["season"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                            <label htmlFor="season">Season</label>
                            <select
                                type="text"
                                name="season"
                                onChange={onChangeHandler}>
                                <option
                                    defaultValue={recipe.season}>
                                    {recipe.season}
                                </option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                                <option value="Autumn">Autumn</option>
                                <option value="Winter">Winter</option>
                            </select>
                        </div>
                        <div className={`${styles["traditional"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                            <label htmlFor="traditional">Kitchen</label>
                            <select
                                type="text"
                                name="traditional"
                                onChange={onChangeHandler}>
                                <option
                                    defaultValue={recipe.kitchen}>
                                    {recipe.kitchen}
                                </option>
                                <option value="Bulgarian">Bulgarian</option>
                                <option value="German">German</option>
                                <option value="English">English</option>
                                <option value="Serbian">Serbian</option>
                            </select>
                        </div>
                    </div>
                    <div className={`${styles["ingredients"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                        <label htmlFor="ingredients">Products</label>
                        <textarea
                            name="ingredients"
                            id="ingredients"
                            cols={30}
                            rows={10}
                            placeholder="Enter one product per row (ex. : Potatoes - 1 kg.)"
                            defaultValue={recipe.products}
                            onChange={onChangeHandler}
                            onBlur={(e) => minLengthCheck(e, 10)}
                        />
                        {errors.ingredients &&
                            <p className={`${styles["error"]} ${styles["products"]}`}>Product's list must be at least 10 characters!</p>}
                    </div>
                    <div className={`${styles["steps"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                        <label htmlFor="steps">Steps</label>
                        <textarea
                            name="steps"
                            id="steps"
                            cols={30}
                            rows={10}
                            placeholder="Enter one step per row (ex. : 1. Boil the potatoes)"
                            defaultValue={recipe.steps}
                            onChange={onChangeHandler}
                            onBlur={(e) => minLengthCheck(e, 10)}
                        />
                        {errors.steps &&
                            <p className={`${styles["error"]} ${styles["steps"]}`}>Cooking steps must be at least 10 characters!</p>}
                    </div>
                    <div className={styles["group-wrapper"]}>
                        <div className={`${styles["calories"]} ${styles["flex-col"]} ${styles["select-wrapper"]}`}>
                            <label htmlFor="calories">Calories (in kcal)</label>
                            <input
                                type="text"
                                name="calories"
                                defaultValue={recipe.calories}
                                onChange={onChangeHandler}
                                onBlur={isPositive}
                            />
                            {errors.calories && <p className={`${styles["error"]} ${styles["calories"]}`}>Please insert positive number!</p>}
                        </div>
                        <div className={`${styles["prep-time"]} ${styles["flex-col"]} ${styles["select-wrapper"]}`}>
                            <label htmlFor="prep-time">Prep time (min)</label>
                            <input
                                type="text"
                                name="prep-time"
                                defaultValue={recipe["prep-time"]}
                                onChange={onChangeHandler}
                                onBlur={isPositive}
                            />
                            {errors['prep-time'] && <p className={`${styles["error"]} ${styles["prep-time"]}`}>Please insert positive number!</p>}
                        </div>
                        <div className={`${styles["cook-time"]} ${styles["flex-col"]} ${styles["select-wrapper"]}`}>
                            <label htmlFor="cook-time">Cook time (min)</label>
                            <input
                                type="text"
                                name="cook-time"
                                defaultValue={recipe["cook-time"]}
                                onChange={onChangeHandler}
                                onBlur={isPositive}
                            />
                            {errors['cook-time'] && <p className={`${styles["error"]} ${styles["cook-time"]}`}>Please insert positive number!</p>}
                        </div>
                    </div>
                    <div className={styles["group-wrapper"]}>
                        <div className={`${styles["level"]} ${styles["flex-col"]} ${styles["select-wrapper"]}  ${styles["after"]}`}>
                            <label htmlFor="level">Complexity</label>
                            <select
                                type="text"
                                name="level"
                                onChange={onChangeHandler}>
                                <option
                                    defaultValue={recipe.level}>
                                    {recipe.level}
                                </option>
                                <option value="Bulgarian">Easy</option>
                                <option value="German">Average</option>
                                <option value="English">Complex</option>
                                <option value="Serbian">Very complex</option>
                            </select>
                        </div>
                        <div className={`${styles["occasion"]} ${styles["flex-col"]} ${styles["select-wrapper"]}  ${styles["after"]}`}>
                            <label htmlFor="occasion">Good for</label>
                            <select
                                type="text"
                                name="occasion"
                                onChange={onChangeHandler}>
                                <option
                                    defaultValue={recipe.occasion}>
                                    {recipe.occasion}
                                </option>
                                <option value="">Breakfast</option>
                                <option value="">Lunch</option>
                                <option value="">Dinner</option>
                                <option value="">Office</option>
                                <option value="">On the road</option>
                                <option value="">School</option>
                                <option value="">Guests</option>
                                <option value="">Guests</option>
                                <option value="">Snack</option>
                            </select>
                        </div>
                        <div className={`${styles["portions"]} ${styles["flex-col"]} ${styles["select-wrapper"]}`}>
                            <label htmlFor="portions">Portions</label>
                            <input
                                type="text"
                                name="portions"
                                defaultValue={recipe.portions}
                                onChange={onChangeHandler}
                                onBlur={isPositive}
                            />
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Edit"
                        className={styles["submit-edit-btn"]} />
                </form>
            </section>
        </div >
    );
}