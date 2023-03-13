import styles from './ArticleCategories.module.css';

export const ArticleCategories = () => {

    return (
        <section className={styles["articles"]}>
            <div className={styles["container"]}>
                <article className={styles["section-info"]}>
                    <h1 className={styles["title"]}>Categories</h1>
                    <p className={styles["descr"]}>
                        In our blog section you can find useful information for food
                        ingredients, workout advices, diets and many more.
                    </p>
                    <p className={styles["descr"]}>
                        To be easier for you, we have separated all articles to following
                        categories.
                    </p>
                </article>
                <ul className={styles["image-grid"]} type="none">
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/categories/vitamins.jpg" alt="recipe details" />
                            <div className={styles["info"]}>
                                <h3>Vitamins</h3>
                                <p>
                                    08 August <span>Admin</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/categories/vitamins.jpg" alt="recipe details" />
                            <div className={styles["info"]}>
                                <h3>Vitamins</h3>
                                <p>
                                    08 August <span>Admin</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/categories/vitamins.jpg" alt="recipe details" />
                            <div className={styles["info"]}>
                                <h3>Vitamins</h3>
                                <p>
                                    08 August <span>Admin</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/categories/vitamins.jpg" alt="recipe details" />
                            <div className={styles["info"]}>
                                <h3>Vitamins</h3>
                                <p>
                                    08 August <span>Admin</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/categories/vitamins.jpg" alt="recipe details" />
                            <div className={styles["info"]}>
                                <h3>Vitamins</h3>
                                <p>
                                    08 August <span>Admin</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/categories/vitamins.jpg" alt="recipe details" />
                            <div className={styles["info"]}>
                                <h3>Vitamins</h3>
                                <p>
                                    08 August <span>Admin</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/categories/vitamins.jpg" alt="recipe details" />
                            <div className={styles["info"]}>
                                <h3>Vitamins</h3>
                                <p>
                                    08 August <span>Admin</span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/categories/vitamins.jpg" alt="recipe details" />
                            <div className={styles["info"]}>
                                <h3>Vitamins</h3>
                                <p>
                                    08 August <span>Admin</span>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}