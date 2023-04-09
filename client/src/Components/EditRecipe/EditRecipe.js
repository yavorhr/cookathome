import styles from './EditRecipe.module.css';

import { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';

import * as recipeService from "../../service/recipeService.js"
import { RecipeContext } from '../../context/RecipeContext.js';
import { AuthContext } from '../../context/AuthContext.js';
import uuid from 'react-uuid';


export const EditRecipe = () => {
    const [recipe, setRecipe] = useState({});
    const [invalidUserInput, setInvalidUserInput] = useState(false);
    const [errors, setErrors] = useState({});
    const currentRef = useRef();

    const { recipeId } = useParams();
    const { onRecipeEdit } = useContext(RecipeContext);
    const { user } = useContext(AuthContext);
    const [values, setValues] = useState({
        name: '',
        description: '',
        category: '',
        'time-of-the-day': '',
        season: '',
        kitchen: '',
        products: '',
        steps: '',
        calories: '',
        'prep-time': '',
        'cook-time': '',
        level: '',
        occasion: '',
        portions: '',
        'meal-category': ''
    });

    useEffect(() => {
        recipeService
            .getRecipeById(recipeId)
            .then(result =>
                setRecipe({
                    ...result,
                    steps: result.steps.join('\n'),
                    products: result.products.join("\n")
                }));
    }, []);

    const onEditSubmitHandler = (e) => {
        e.preventDefault();

        const updatedRecipe = Object.fromEntries(new FormData(e.target));

        const invalidUserInput = Object.values(errors).some(e => Boolean(e));
        const selectMenuErrorOrBlankInput = Object.values(updatedRecipe).some(e => e == 'Please select' || e == '');

        console.log(errors);

        if (invalidUserInput || selectMenuErrorOrBlankInput) {
            setInvalidUserInput(true);
            return
        }

        console.log(invalidUserInput);
        console.log(selectMenuErrorOrBlankInput);

        setInvalidUserInput(false);

        const cookingTimeStr = cookingTimeCategory(Number(recipe["cook-time"] + Number(recipe["prep-time"])))
        const caloriesStr = caloriesCategory(Number(recipe.calories));

        updatedRecipe.links = recipe.links;
        updatedRecipe.products = stringToArray(updatedRecipe.products);
        updatedRecipe.steps = stringToArray(updatedRecipe.steps);
        updatedRecipe.user = { imageUrl: user.imageUrl, "full-name": user["full-name"] }
        updatedRecipe["cat-by-time"] = cookingTimeStr;
        updatedRecipe["cat-by-calories"] = caloriesStr;

        recipeService.edit(recipeId, updatedRecipe)
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
                            name="name"
                            defaultValue={recipe.name}
                            onChange={onChangeHandler}
                            onBlur={(e) => minLengthCheck(e, 2)}
                        />
                        {errors.name && <p className={`${styles["error"]} ${styles["title"]}`}>Recipe name must be at least 2 characters!</p>}
                    </div>
                    <div className={`${styles["descr"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id=""
                            cols={10}
                            rows={10}
                            placeholder="Enter short description..."
                            defaultValue={recipe.description}
                            onChange={onChangeHandler}
                            onBlur={(e) => minLengthCheck(e, 5)}
                        />
                        {errors.description && <p className={`${styles["error"]} ${styles["descr"]}`}>Description name must be at least 5 characters!</p>}
                    </div>
                    <div className={styles["group-wrapper"]}>
                        <div className={`${styles["category"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                            <label htmlFor="category">Category</label>
                            <select
                                type="text"
                                name="category"
                                value={values.category}
                                onChange={onChangeHandler}
                                ref={currentRef}
                            >
                                <option value="Please select">Please select</option>
                                <option value="Veggetarian">Veggetarian</option>
                                <option value="Meat">Meat</option>
                                <option value="Fish">Fish</option>
                            </select>
                        </div>
                        <div className={`${styles["category"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                            <label htmlFor="category">Meal Category</label>
                            <select
                                type="text"
                                name="meal-category"
                                value={values["meal-category"]}
                                onChange={onChangeHandler}
                            >
                                <option value="Please select">Please select</option>
                                {values.category && currentRef.current.value != "Please select" && recipeService.mealsCategories[currentRef.current.value]
                                    .map(cat =>
                                        <option key={uuid()} value={cat}>{cat}</option>
                                    )}
                            </select>
                        </div>
                        <div className={`${styles["type"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                            <label htmlFor="type">Time of the day</label>
                            <select
                                type="text"
                                name="time-of-the-day"
                                value={values["time-of-the-day"]}
                                onChange={onChangeHandler}
                            >
                                <option defaultValue="Please select">Please select</option>
                                <option value="Brekfast">Brekfast</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Snack">Snack</option>
                                <option value="Lunch">Lunch</option>
                            </select>
                        </div>
                        <div className={`${styles["season"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                            <label htmlFor="season">Season</label>
                            <select
                                type="text"
                                name="season"
                                onChange={onChangeHandler}>
                                <option value="Please select">Please select</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                                <option value="Autumn">Autumn</option>
                                <option value="Winter">Winter</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles["group-wrapper"]}>

                        <div className={`${styles["traditional"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                            <label htmlFor="traditional">Kitchen</label>
                            <select
                                type="text"
                                name="traditional"
                                onChange={onChangeHandler}>
                                <option value="Please select">Please select</option>
                                <option value="Bulgarian">Bulgarian</option>
                                <option value="German">German</option>
                                <option value="English">English</option>
                                <option value="Serbian">Serbian</option>
                            </select>
                        </div>
                        <div className={`${styles["level"]} ${styles["flex-col"]} ${styles["select-wrapper"]}  ${styles["after"]}`}>
                            <label htmlFor="level">Complexity</label>
                            <select
                                type="text"
                                name="level"
                                onChange={onChangeHandler}>
                                <option value="Please select">Please select</option>
                                <option value="Bulgarian">Easy</option>
                                <option value="German">Average</option>
                                <option value="English">Complex</option>
                                <option value="Serbian">Very complex</option>
                            </select>
                        </div>
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
                    <div className={styles["group-wrapper-time"]}>
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
                    <div className={`${styles["ingredients"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                        <label htmlFor="ingredients">Products</label>
                        <textarea
                            name="products"
                            id="products"
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
                    <input
                        type="submit"
                        value="Edit"
                        className={styles["submit-edit-btn"]} />
                </form>
                {invalidUserInput && <p className={`${styles["error"]} ${styles["select-menu"]}`}>You have missing fields or incorrect input!</p>}
            </section>
        </div >
    );
}

const stringToArray = (string) => {
    let result = string.split(/\r?\n/).filter(Boolean);
    return result;
}

const caloriesCategory = (cal) => {
    let caloriesStr = "";
    if (cal <= 200) {
        caloriesStr = "up-to-200-kcal"
    } else if (cal <= 500) {
        caloriesStr = "up-to-500-kcal"
    }
    else if (cal <= 800) {
        caloriesStr = "up-to-800-kcal"
    }
    else {
        caloriesStr = "more-than-800-kcal"
    }
    return caloriesStr;
}

const cookingTimeCategory = (min) => {
    let timeStr = "";
    if (min <= 30) {
        timeStr = "up-to-30-min"
    } else if (min <= 60) {
        timeStr = "up-to-60-min"
    }
    else if (min <= 90) {
        timeStr = "up-to-90-min"
    }
    else {
        timeStr = "more-than-90-min"
    }
    return timeStr;
}