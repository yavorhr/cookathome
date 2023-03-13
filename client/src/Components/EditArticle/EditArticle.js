import styles from './EditArticle.module.css';

export const EditArtice = () => {

    return (
        <section className={styles["edit--article-section"]}>
            <form action="" className={`${styles["mrgn-auto"]} ${styles["edit-article-form"]}`}>
                <h1>Edit article</h1>
                <div className={`${styles["title"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        placeholder="Please enter article title"
                        name="title"
                    />
                </div>
                <div className={`${styles["category"]} ${styles["select-wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                    <label htmlFor="category">Category</label>
                    <select type="text" name="category">
                        <option value="---">---</option>
                        <option value="Proteins">Proteins</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Workout">Workout</option>
                        <option value="Quick meals">Quick meals</option>
                        <option value="Smoothies">Smoothies</option>
                    </select>
                </div>
                <div className={`${styles["image-url"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                    <label htmlFor="image-url">Cover image</label>
                    <input type="text" placeholder="Please insert url" name="title" />
                </div>
                <div className={`${styles["descr"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                    <label htmlFor="descr">Description</label>
                    <textarea
                        name="descr"
                        id=""
                        cols={30}
                        rows={5}
                        placeholder="Please enter short description"
                    />
                </div>
                <div className={`${styles["content"]} ${styles["wrapper"]} ${styles["flex-col"]} ${styles["mrgn-auto"]}`}>
                    <label htmlFor="content">Text</label>
                    <textarea
                        name="content"
                        id=""
                        cols={30}
                        rows={10}
                        placeholder="Please insert your text here"
                    />
                </div>
                <button type="submit" form="form1" value="Submit" className={styles["edit-article-submit"]}>
                    Edit
                </button>
            </form>
        </section>

    );
}