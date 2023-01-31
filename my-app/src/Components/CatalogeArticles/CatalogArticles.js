import styles from './CatalogArticles.module.css';

export default function CatalogArticles() {
    return (
        <div>
            <section className={styles["main-articles"]}>
                <article className={styles["section-info"]}>
                    <h1 className={styles["title"]}>Breakfast Ideas</h1>
                    <p className={styles["descr"]}>Breakfast is often called 'the most important meal of the day', and for good reason
                    </p>
                </article>
                <ul type="none" className={styles["image-grid"]}>
                    <li className={styles["article-item"]}>
                        <a href="">
                        <img src="/img/dishes/muesli.jpg" alt="recipe details" />
                            <div className={styles["info"]}>
                                <h3>Egg & Sausage</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                            <img src="/img/dishes/muesli.jpg" alt="recipe details" />
                            <div className={styles["info"]}>
                                <h3>Muesli</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
                    <li className={styles["article-item"]}>
                        <a href="">
                        <img src="/img/dishes/muesli.jpg" alt="recipe details" />
                        <div className={styles["info"]}>
                                <h3>Home made pancakes</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>

            <section className={styles["rest-articles-section"]}>
                <ul className={styles["rest-articles-list"]} type="none">
                    <li>
                        <a href="">
                            <div className={styles["card"]}>
                                <img src="/img/dishes//bananas.jpg" alt="" />
                                <div className={styles["card__info"]}>
                                    <h3>Bananas are rich on calcium </h3>
                                    <p className="date">10 June <span>Admin</span></p>
                                    <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eligendi sunt
                                        ullam aperiam quis quisquam et cum, assumenda veritatis quasi numquam odio. Vitae
                                        voluptatem labore distinctio sint quaerat quasi sed.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <div className={styles["card"]}>
                                <img src="/img/dishes//bananas.jpg" alt="" />
                                <div className={styles["card__info"]}>
                                    <h3>Bananas are rich on calcium </h3>
                                    <p className="date">10 June <span>Admin</span></p>
                                    <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eligendi sunt
                                        ullam aperiam quis quisquam et cum, assumenda veritatis quasi numquam odio. Vitae
                                        voluptatem labore distinctio sint quaerat quasi sed.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <div className={styles["card"]}>
                                <img src="/img/dishes//bananas.jpg" alt="" />
                                <div className={styles["card__info"]}>
                                    <h3>Bananas are rich on calcium </h3>
                                    <p className="date">10 June <span>Admin</span></p>
                                    <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eligendi sunt
                                        ullam aperiam quis quisquam et cum, assumenda veritatis quasi numquam odio. Vitae
                                        voluptatem labore distinctio sint quaerat quasi sed.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>

            </section>

        </div >
    );
} 