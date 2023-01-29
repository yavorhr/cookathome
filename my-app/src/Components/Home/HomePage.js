import './home-page.css';

export default function HomePage() {
    return (
        <div>
            <section className="gallery">
                <ul type="none">
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
                            <img src="/img/dishes/eggsausage.jpg" alt="recipe details" />
                            <div className="info">
                                <h3>Egg & Sausage</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
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
                            <img src="/img/dishes/eggsausage.jpg" alt="recipe details" />
                            <div className="info">
                                <h3>Egg & Sausage</h3>
                                <p>08 August <span>Admin</span></p>
                            </div>
                        </a>
                    </li>
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
                <div className="users-recently-added">
                    <ul type="none">
                        <li>
                            <article>
                                <img className="img-holder" src="https://images.healthshots.com/healthshots/en/uploads/2022/09/14175516/financially-independent-1600x900.jpg">
                                </img>
                                <div className="article-info">
                                    <a href="">Albena</a> sgotvi <a href="">Retro sladkish</a>
                                    <p>4 min ago</p>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <img className="img-holder" src="https://images.healthshots.com/healthshots/en/uploads/2022/09/14175516/financially-independent-1600x900.jpg">
                                </img>
                                <div className="article-info">
                                    <a href="">Albena</a> sgotvi <a href="">Retro sladkish</a>
                                    <p>4 min ago</p>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <img className="img-holder" src="https://images.healthshots.com/healthshots/en/uploads/2022/09/14175516/financially-independent-1600x900.jpg">
                                </img>
                                <div className="article-info">
                                    <a href="">Albena</a> sgotvi <a href="">Retro sladkish</a>
                                    <p>4 min ago</p>
                                </div>
                            </article>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="recently-recipes">
                <nav>
                    <ul type="none">
                        <span>New recipes</span>
                        <li>
                            <a href="">All</a>
                        </li>
                        <li>
                            <a href="">Salads</a>
                        </li>
                        <li>
                            <a href="">Main</a>
                        </li>
                        <li>
                            <a href="">Pre-dish</a>
                        </li>

                        <li>
                            <a href="">Soups</a>
                        </li>

                        <li>
                            <a href="">Fish</a>
                        </li>

                        <li>
                            <a href="">Vegan</a>
                        </li>
                    </ul>
                </nav>

                <ul className="recipes-grid" type="none">
                    <li className="recipe-card">
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className="card-info">
                            <h3> <a href="">Гризини</a> </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                    <li className="recipe-card">
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className="card-info">
                            <h3> <a href="">Гризини</a> </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                    <li className="recipe-card">
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className="card-info">
                            <h3> <a href="">Гризини</a> </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                    <li className="recipe-card">

                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className="card-info">
                            <h3> <a href="">Гризини</a> </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                    <li className="recipe-card">
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className="card-info">
                            <h3> <a href="">Гризини</a> </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                    <li className="recipe-card">
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className="card-info">
                            <h3> <a href="">Гризини</a> </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                    <li className="recipe-card">
                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg" alt="" />
                        <div className="card-info">
                            <h3><a href="">Гризини</a>
                            </h3>
                            <p>29 Януари <a href="">Йорданка Т.</a> </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}