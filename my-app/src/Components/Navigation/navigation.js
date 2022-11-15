import './navigation.css';

export default function Navigation() {
    return (
        <header id="header">
            <nav className="navigation">
                <article className="wrapper logo-favorite-icons">
                    <a href=""><img className="logo" src="../img/logo.png" /></a>
                    <div className="nav-item favourites">
                        <button>
                            <i className="fa-solid fa-heart"></i>
                        </button>
                    </div>
                </article>

                <article className="wrapper-links">
                    <div className="dropdown recipies-cat">
                        <button className="all-recipies-btn">Recipies</button>
                        <div className="dropdown-content information-grid">
                            <div className="dropdown-heading">
                                <span>Season</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Breakfast</a>
                                    <a href="#" className="nav-link">Lunch</a>
                                    <a href="#" className="nav-link">Dinner</a>
                                    <a href="#" className="nav-link">Dessert</a>
                                    <a className="view-more nav-link" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading">
                                <span>During the day</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Breakfast</a>
                                    <a href="#" className="nav-link">Lunch</a>
                                    <a href="#" className="nav-link">Dinner</a>
                                    <a href="#" className="nav-link">Dessert</a>
                                    <a className="view-more nav-link" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading"> <span>Main ingredients</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Pork</a>
                                    <a href="#" className="nav-link">Chicken</a>
                                    <a href="#" className="nav-link">Fish</a>
                                    <a href="#" className="nav-link">Lamb</a>
                                    <a className="view-more nav-link" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading"> <span>Kitchen</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Bulgarian</a>
                                    <a href="#" className="nav-link">Turkish</a>
                                    <a href="#" className="nav-link">Serbian</a>
                                    <a href="#" className="nav-link">Lamb</a>
                                    <a className="view-more nav-link" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading"> <span>Quick & Easy</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Breakfasts for quickers</a>
                                    <a href="#" className="nav-link">Quick lunches</a>
                                    <a href="#" className="nav-link">Easy dinners</a>
                                    <a href="#" className="nav-link">Desserts for beginners</a>
                                    <a className="view-more" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading"> <span>Quick & Easy</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Breakfasts for quickers</a>
                                    <a href="#" className="nav-link">Quick lunches</a>
                                    <a href="#" className="nav-link">Easy dinners</a>
                                    <a href="#" className="nav-link">Desserts for beginners</a>
                                    <a className="view-more" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading"> <span>Quick & Easy</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Breakfasts for quickers</a>
                                    <a href="#" className="nav-link">Quick lunches</a>
                                    <a href="#" className="nav-link">Easy dinners</a>
                                    <a href="#" className="nav-link">Desserts for beginners</a>
                                    <a className="view-more" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading"> <span>Quick & Easy</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Breakfasts for quickers</a>
                                    <a href="#" className="nav-link">Quick lunches</a>
                                    <a href="#" className="nav-link">Easy dinners</a>
                                    <a href="#" className="nav-link">Desserts for beginners</a>
                                    <a className="view-more" href="#">view more...</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="dropdown recipies-cat">
                        <button className="all-recipies-btn">Blog</button>
                        <div className="dropdown-content information-grid">
                            <div className="dropdown-heading">
                                <span>Nutrition</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Healthy snacks</a>
                                    <a href="#" className="nav-link">All about sugar</a>
                                    <a href="#" className="nav-link">Is alcohol really bad ?</a>
                                    <a href="#" className="nav-link">Learn about portions size</a>
                                    <a className="view-more nav-link" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading">
                                <span>Workout related</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">What to eat before and after training</a>
                                    <a href="#" className="nav-link">How much proteins ?</a>
                                    <a href="#" className="nav-link">Gain weight the right way</a>
                                    <a href="#" className="nav-link">Breakfasts for champions</a>
                                    <a className="view-more nav-link" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading">
                                <span>Diets</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Carnivore Die</a>
                                    <a href="#" className="nav-link">Veganism</a>
                                    <a href="#" className="nav-link">Paleo</a>
                                    <a href="#" className="nav-link">If It Fits Your Macros</a>
                                    <a className="view-more nav-link" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading">
                                <span>Quick and easy</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Food for the office</a>
                                    <a href="#" className="nav-link">Grab and run</a>
                                    <a href="#" className="nav-link">Easy in the morning</a>
                                    <a href="#" className="nav-link">Simple dinner tips</a>
                                    <a className="view-more nav-link" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading">
                                <span>Quick and easy</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Food for the office</a>
                                    <a href="#" className="nav-link">Grab and run</a>
                                    <a href="#" className="nav-link">Easy in the morning</a>
                                    <a href="#" className="nav-link">Simple dinner tips</a>
                                    <a className="view-more nav-link" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading">
                                <span>Quick and easy</span>
                                <div className="dropdown-links">
                                    <a href="#" className="nav-link">Food for the office</a>
                                    <a href="#" className="nav-link">Grab and run</a>
                                    <a href="#" className="nav-link">Easy in the morning</a>
                                    <a href="#" className="nav-link">Simple dinner tips</a>
                                    <a className="view-more nav-link" href="#">view more...</a>
                                </div>
                            </div>
                            <div className="dropdown-heading all-categories-link">
                                <a href=""><span>Check all of our articles here</span></a>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="user-shortcut-buttons">
                    <div className="wrapper sign-up-links">
                        <a href="">Login</a>
                        <span>/</span>
                        <a href="">Register</a>
                        <a href="" className="logout-btn">Logout</a>

                        <button className="user-profile-shortcut-btn"><i className="fa-regular fa-user"></i></button>
                    </div>

                </article>

                <article className="nav-item search">
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </article>

                <article className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </article>
            </nav>
        </header>
    )
}