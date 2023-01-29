import './home-page.css';

export default function HomePage() {
    return (
        <div>

            <section class="gallery">

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
                </ul>

            </section>

            <section className="hero section">
                <div className="today-recipe">
                    <img src="/img/dishes/eggsausage.jpg" alt="" />
                    <article>
                        <p className="today-recipe-title">Vegeterian Dinner </p>
                        <h2>Roasted Eggplant and Butternut Suqash</h2>
                        <p className="descr">Dignissimos culpa aliquid ad nulla nemo, esse unde iusto beatae facilis
                            quia, minima assumenda.</p>
                        <a href="">Get the recipe</a>
                    </article>
                </div>
            </section>

            <section>
                <div className="recently-recipies">
                    <a className="recipies-title" href="">
                        <h2 className="section-title">Latest recipies</h2>
                    </a>
                    <ul className="card-list" type="none">
                        <li>
                            <a href="#">
                                <div className="card-item">
                                    <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                                    <h3 className="card-title">Lasagna</h3>
                                    <p className="card-descr">Very delicious dish for the whole family...</p>
                                    <span><i className="fa-solid fa-clock"></i>30 mins</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="card-item">
                                    <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                                    <h3 className="card-title">Lasagna</h3>
                                    <p className="card-descr">Very delicious dish for the whole family...</p>
                                    <span><i className="fa-solid fa-clock"></i>30 mins</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="card-item">
                                    <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                                    <h3 className="card-title">Lasagna</h3>
                                    <p className="card-descr">Very delicious dish for the whole family...</p>
                                    <span><i className="fa-solid fa-clock"></i>30 mins</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}