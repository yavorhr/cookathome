import './catalog.css';

export default function CatalogArticles() {
    return (
        <div>
            <section className="articles">
                <article className="section-info">
                    <h1 className="title">Breakfast Ideas</h1>
                    <p className="descr">Breakfast is often called 'the most important meal of the day', and for good reason
                    </p>
                </article>
                <ul type="none" className="image-grid">
                    <li className="article-item">
                        <a href="">
                            <img src="/img/dishes/eggsausage.jpg" alt="recipe details" />
                            <div className="info">
                                <h3>Egg & Sausage</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
                    <li className="article-item">
                        <a href="">
                            <img src="/img/dishes/muesli.jpg" alt="recipe details" />
                            <div className="info">
                                <h3>Muesli</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
                    <li className="article-item">
                        <a href="">
                            <img src="/img/dishes/pancakes.jpg" alt="recipe details" />
                            <div className="info">
                                <h3>Home made pancakes</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>

            <section className="rest-articles-section">
                <ul className="rest-articles" type="none">
                    <li>
                        <a href="">
                            <div className="card">
                                <img src="/img/dishes//bananas.jpg" alt="" />
                                <div className="card-info">
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
                            <div className="card">
                                <img src="/img/dishes//bananas.jpg" alt="" />
                                <div className="card-info">
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
                            <div className="card">
                                <img src="/img/dishes//bananas.jpg" alt="" />
                                <div className="card-info">
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