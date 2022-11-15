import './home-page.css';

export default function HomePage() {
    return (
        <div>
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

            <section className="summer-section">
                <div className="recipies">
                    <a className="recipies-title" href="">
                        <h2 className="section-title">Perfet for lazy summer</h2>
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

            <section className="fresh-salads-section">
                <div className="recipies">
                    <a className="recipies-title" href="">
                        <h2 className="section-title">Fresh salads ideas...</h2>
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