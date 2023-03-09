import styles from './CreateRecipe.module.css'

export const CreateRecipe = () => {
    return (
            <div className={styles["create-recipe-background"]}>
                <section className={styles["create--recipe-section"]}>
                    <form action="" className={`${styles["mrgn-auto"]} ${styles["flex-col"]} ${styles["create-recipe-form"]}`}>
                        <h1>Create recipe</h1>
                        <div className={`${styles["title"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                            <label htmlFor="title">Recipe name</label>
                            <input type="text" placeholder="Enter the title" name="title" />
                        </div>
                        <div className={`${styles["descr"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                            <label htmlFor="descr">Description</label>
                            <textarea
                                name="descr"
                                id=""
                                cols={10}
                                rows={10}
                                placeholder="Enter short description..."
                            />
                        </div>
                        <div className={`${styles["imageUrl"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                            <label htmlFor="title">Recipe URL image</label>
                            <input type="text" placeholder="Insert recipe url here..." name="title" />
                        </div>
                        <div className={styles["group-wrapper"]}>
                            <div className={`${styles["category"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                                <label htmlFor="category">Category</label>
                                <select type="text" name="category">
                                <option value="---">---</option>
                                    <option value="Veggetarian">Veggetarian</option>
                                    <option value="Meat">Meat</option>
                                    <option value="Fish">Fish</option>
            
                                </select>
                            </div>
                            <div className={`${styles["type"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                                <label htmlFor="type">Time of the day</label>
                                <select type="text" name="category">
                                <option value="---">---</option>
                                    <option value="Brekfast">Brekfast</option>
                                    <option value="Dinner">Dinner</option>
                                    <option value="Snack">Snack</option>
                                    <option value="Lunch">Lunch</option>
                                </select>
                            </div>
                            <div className={`${styles["season"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                                <label htmlFor="season">Season</label>
                                <select type="text" name="season">
                                <option value="---">---</option>
                                    <option value="Spring">Spring</option>
                                    <option value="Summer">Summer</option>
                                    <option value="Autumn">Autumn</option>
                                    <option value="Winter">Winter</option>
                                </select>
                            </div>
                            <div className={`${styles["traditional"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["after"]}`}>
                                <label htmlFor="traditional">Kitchen</label>
                                <select type="text" name="traditional">
                                <option value="---">---</option>
                                    <option value="Bulgarian">Bulgarian</option>
                                    <option value="German">German</option>
                                    <option value="English">English</option>
                                    <option value="Serbian">Serbian</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${styles["ingredients"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                            <label htmlFor="ingredients">Ingredients</label>
                            <textarea
                                name="ingredients"
                                id=""
                                cols={30}
                                rows={10}
                                placeholder="Enter one product per row (ex. : Potatoes - 1 kg.)"
                    
                            />
                        </div>
                        <div className={`${styles["steps"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                            <label htmlFor="steps">Steps</label>
                            <textarea
                                name="steps"
                                id=""
                                cols={30}
                                rows={10}
                                placeholder="Enter one step per row (ex. : 1. Boil the potatoes)"                
                            />
                        </div>
                        <div className={styles["group-wrapper"]}>
                            <div className={`${styles["calories"]} ${styles["flex-col"]} ${styles["select-wrapper"]}`}>
                                <label htmlFor="calories">Calories (in kcal)</label>
                                <input type="text" name="calories" />
                            </div>
                            <div className={`${styles["prep-time"]} ${styles["flex-col"]} ${styles["select-wrapper"]}`}>
                                <label htmlFor="prep-time">Prep time (min)</label>
                                <input type="text" name="prep-time" />
                            </div>
                            <div className={`${styles["cook-time"]} ${styles["flex-col"]} ${styles["select-wrapper"]}`}>
                                <label htmlFor="cook-time">Cook time (min)</label>
                                <input type="text" name="cook-time" />
                            </div>
                        </div>
                        <div className={styles["group-wrapper"]}>
                            <div className={`${styles["level"]} ${styles["flex-col"]} ${styles["select-wrapper"]}  ${styles["after"]}`}>
                                <label htmlFor="level">Level</label>
                                <select type="text" name="level">
                                    <option value="---">---</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                    <option value="Chef">Chef</option>
                                </select>
                            </div>
                            <div className={`${styles["occasion"]} ${styles["flex-col"]} ${styles["select-wrapper"]}  ${styles["after"]}`}>
                                <label htmlFor="occasion">Good for</label>
                                <select type="text" name="occasion">
                                <option value="---">---</option>
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
                                <input type="text" name="portions" />
                            </div>
                        </div>
                        <button type="submit" form="form1" value="Submit" className={styles["create-recipe-submit-btn"]}>
                            Create
                        </button>
                    </form>
                </section>
            </div>
    );
}