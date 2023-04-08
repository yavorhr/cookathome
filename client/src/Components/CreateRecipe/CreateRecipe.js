import styles from './CreateRecipe.module.css';

import uuid from 'react-uuid';
import * as recipeService from '../../service/recipeService.js';
import * as cloudinary from '../../service/cloudinary.js';

import { useState, useRef } from 'react';
import { useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext.js';
import { AuthContext } from '../../context/AuthContext.js';

export const CreateRecipe = ({ }) => {
    const { user } = useContext(AuthContext);
    const { createRecipe } = useContext(RecipeContext);
    const currentRef = useRef();

    /* TODO: validation hook for errors, so it can be re-usable to edit page */
    const [invalidUserInput, setInvalidUserInput] = useState(false);
    const [errors, setErrors] = useState({});
    const [images, setImages] = useState([]);
    const [links, setLinks] = useState([]);
    const [values, setValues] = useState({
        name: '',
        description: '',
        imageUrl: 0,
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

    const onChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    /*TODO:// UX WAY TO POP UP ERRORS */

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const recipe = Object.fromEntries(new FormData(e.target));

        const invalidUserInput = Object.values(errors).some(e => Boolean(e))
        const selectMenuErrorOrBlankInput = Object.values(recipe).some(e => e == 'Please select' || e == '');

        if (invalidUserInput || selectMenuErrorOrBlankInput) {
            setInvalidUserInput(true);
            return
        }

        setInvalidUserInput(false);

        const products = stringToArray(recipe.products);
        const steps = stringToArray(recipe.steps);
        const cookingTimeStr = cookingTimeCategory(Number(recipe["cook-time"] + Number(recipe["prep-time"])))
        const caloriesStr = caloriesCategory(Number(recipe.calories));

        recipe.products = products;
        recipe.steps = steps;
        recipe.user = { imageUrl: user.imageUrl, "full-name": user["full-name"] }
        recipe["cat-by-time"] = cookingTimeStr;
        recipe["cat-by-calories"] = caloriesStr;
        recipe.links = links;

        recipeService.create(recipe)
            .then(result =>
                createRecipe(result)
            )
    }

    const minLengthCheck = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < bound
        }))
    }

    // const validImageUrl = (e) => {
    //     const regex = new RegExp(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i);
    //     const urlInput = e.target.value;

    //     setErrors(state => ({
    //         ...state,
    //         [e.target.name]: !regex.test(urlInput)
    //     }))
    // }

    const uploadImagesCheck = (imagesCount, bound) => {
        setErrors(state => ({
            ...state,
            imageUrl: imagesCount == 0 || imagesCount > bound
        }))
    }

    const isPositive = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name] < 0 || isNaN(values[e.target.name])
        }))
    }

    const submitImage = async () => {
        if (images.length == 0 || images.length > 7) {
            return;
        }
        try {
            let arr = [];
            for (let i = 0; i < images.length; i++) {
                const data = await cloudinary.uploadCloudinary(images[i]);
                arr.push(data);
            }
            setLinks(arr);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <div className={styles["create-recipe-background"]}>
                <section className={styles["create--recipe-section"]}>
                    <form
                        action=""
                        className={`${styles["mrgn-auto"]} ${styles["flex-col"]} ${styles["create-recipe-form"]}`}
                        onSubmit={onSubmitHandler}
                    >
                        <h1>Create recipe</h1>
                        <div className={`${styles["name"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                            <label htmlFor="name">Recipe name</label>
                            <input
                                type="text"
                                placeholder="Enter the name"
                                name="name"
                                value={values.name}
                                onChange={onChangeHandler}
                                onBlur={(e) => minLengthCheck(e, 2)}
                            />
                            {errors.name && <p className={`${styles["error"]} ${styles["name"]}`}>Recipe name must be at least 2 characters!</p>}
                        </div>
                        <div className={`${styles["descr"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                cols={10}
                                rows={3}
                                maxLength={30}
                                placeholder="Enter description up to max 100 characters..."
                                value={values.description}
                                onChange={onChangeHandler}
                                onBlur={(e) => minLengthCheck(e, 5)}
                            />
                            {errors.description && <p className={`${styles["error"]} ${styles["descr"]}`}>Description name must be between 5 and 100 characters!</p>}
                        </div>

                        <div className={`${styles["imageUrl"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                            <label htmlFor="imageUrl">Please select up to 4 images</label>
                            <input
                                type="file"
                                multiple="multiple"
                                onChange={(e) => setImages(e.target.files)}
                                onBlur={(e) => uploadImagesCheck(e.target.files.length, 4)} />
                            <button disabled={errors.imageUrl} onClick={submitImage} type="submit">upload</button>
                        </div>
                        {errors.imageUrl && <p className={`${styles["error"]} ${styles["imageUrl"]}`}>Please add up to 8 images</p>}
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
                        </div>
                        <div className={styles["group-wrapper"]}>
                            <div className={`${styles["type"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                                <label htmlFor="type">Time of the day</label>
                                <select
                                    type="text"
                                    name="time-of-the-day"
                                    value={values['time-of-the-day']}
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
                                    value={values.season}
                                    onChange={onChangeHandler}
                                >
                                    <option value="Please select">Please select</option>
                                    <option value="Spring">Spring</option>
                                    <option value="Summer">Summer</option>
                                    <option value="Autumn">Autumn</option>
                                    <option value="Winter">Winter</option>
                                </select>
                            </div>
                            <div className={`${styles["traditional"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                                <label htmlFor="kitchen">Kitchen</label>
                                <select
                                    type="text"
                                    name="kitchen"
                                    value={values.kitchen}
                                    onChange={onChangeHandler}
                                >
                                    <option value="Please select">Please select</option>
                                    <option value="Bulgarian">Bulgarian</option>
                                    <option value="German">German</option>
                                    <option value="English">English</option>
                                    <option value="Serbian">Serbian</option>
                                </select>
                            </div>
                        </div>

                        <div className={`${styles["ingredients"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                            <label htmlFor="products">Ingredients</label>
                            <textarea
                                name="products"
                                id=""
                                cols={30}
                                rows={10}
                                placeholder="Enter one product per row (ex. : Potatoes - 1 kg.)"
                                value={values.products}
                                onChange={onChangeHandler}
                                onBlur={(e) => minLengthCheck(e, 10)}
                            />
                            {errors.products && <p className={`${styles["error"]} ${styles["products"]}`}>Product's list must be at least 10 characters!</p>}
                        </div>
                        <div className={`${styles["steps"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                            <label htmlFor="steps">Steps</label>
                            <textarea
                                name="steps"
                                id=""
                                cols={30}
                                rows={10}
                                placeholder="Enter one step per row (ex. : 1. Boil the potatoes)"
                                value={values.steps}
                                onChange={onChangeHandler}
                                onBlur={(e) => minLengthCheck(e, 1)}
                            />
                            {errors.steps && <p className={`${styles["error"]} ${styles["steps"]}`}>Cooking steps must be at least 10 characters!</p>}
                        </div>
                        <div className={styles["group-wrapper"]}>
                            <div className={`${styles["calories"]} ${styles["flex-col"]} ${styles["select-wrapper"]}`}>
                                <label htmlFor="calories">Calories (in kcal)</label>
                                <input
                                    type="text"
                                    name="calories"
                                    value={values.calories}
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
                                    value={values['prep-time']}
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
                                    value={values['cook-time']}
                                    onChange={onChangeHandler}
                                    onBlur={isPositive}
                                />
                                {errors['cook-time'] && <p className={`${styles["error"]} ${styles["cook-time"]}`}>Please insert positive number!</p>}
                            </div>
                        </div>
                        <div className={styles["group-wrapper"]}>
                            <div className={`${styles["level"]} ${styles["flex-col"]} ${styles["select-wrapper"]}  ${styles["after"]}`}>
                                <label htmlFor="level">Level</label>
                                <select
                                    type="text"
                                    name="level"
                                    value={values.level}
                                    onChange={onChangeHandler}
                                >
                                    <option value="Please select">Please select</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                    <option value="Chef">Chef</option>
                                </select>
                            </div>

                            <div className={`${styles["portions"]} ${styles["flex-col"]} ${styles["select-wrapper"]}`}>
                                <label htmlFor="portions">Portions</label>
                                <input
                                    type="text"
                                    name="portions"
                                    value={values.portions}
                                    onChange={onChangeHandler}
                                    onBlur={isPositive}
                                />
                                {errors.portions && <p className={`${styles["error"]} ${styles["portions"]}`}>Please insert positive number!</p>}
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Create"
                            className={styles["create-recipe-submit-btn"]}>
                        </input>
                    </form>
                    {invalidUserInput && <p className={`${styles["error"]} ${styles["select-menu"]}`}>You have missing fields or incorrect input!</p>}
                </section>
            </div>
        </>
    );
}

const stringToArray = (string) => {
    let result = string.split(/\r?\n/);
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