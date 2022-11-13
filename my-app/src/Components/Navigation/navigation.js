import './navigation.css';

export default function Navigation(){
    return (
        <header id="header">
        <nav class="navigation">
            <article class="wrapper logo-favorite-icons">
                <a href=""><img class="logo" src="../img/logo.png" /></a>
                <div class="nav-item favourites">
                    <button>
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
            </article>

            <article class="wrapper-links">
                <div class="dropdown recipies-cat">
                    <button class="all-recipies-btn">Recipies</button>
                    <div class="dropdown-content information-grid">
                        <div class="dropdown-heading">
                            <span>Season</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Breakfast</a>
                                <a href="#" class="nav-link">Lunch</a>
                                <a href="#" class="nav-link">Dinner</a>
                                <a href="#" class="nav-link">Dessert</a>
                                <a class="view-more nav-link" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading">
                            <span>During the day</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Breakfast</a>
                                <a href="#" class="nav-link">Lunch</a>
                                <a href="#" class="nav-link">Dinner</a>
                                <a href="#" class="nav-link">Dessert</a>
                                <a class="view-more nav-link" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading"> <span>Main ingredients</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Pork</a>
                                <a href="#" class="nav-link">Chicken</a>
                                <a href="#" class="nav-link">Fish</a>
                                <a href="#" class="nav-link">Lamb</a>
                                <a class="view-more nav-link" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading"> <span>Kitchen</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Bulgarian</a>
                                <a href="#" class="nav-link">Turkish</a>
                                <a href="#" class="nav-link">Serbian</a>
                                <a href="#" class="nav-link">Lamb</a>
                                <a class="view-more nav-link" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading"> <span>Quick & Easy</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Breakfasts for quickers</a>
                                <a href="#" class="nav-link">Quick lunches</a>
                                <a href="#" class="nav-link">Easy dinners</a>
                                <a href="#" class="nav-link">Desserts for beginners</a>
                                <a class="view-more" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading"> <span>Quick & Easy</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Breakfasts for quickers</a>
                                <a href="#" class="nav-link">Quick lunches</a>
                                <a href="#" class="nav-link">Easy dinners</a>
                                <a href="#" class="nav-link">Desserts for beginners</a>
                                <a class="view-more" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading"> <span>Quick & Easy</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Breakfasts for quickers</a>
                                <a href="#" class="nav-link">Quick lunches</a>
                                <a href="#" class="nav-link">Easy dinners</a>
                                <a href="#" class="nav-link">Desserts for beginners</a>
                                <a class="view-more" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading"> <span>Quick & Easy</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Breakfasts for quickers</a>
                                <a href="#" class="nav-link">Quick lunches</a>
                                <a href="#" class="nav-link">Easy dinners</a>
                                <a href="#" class="nav-link">Desserts for beginners</a>
                                <a class="view-more" href="#">view more...</a>
                            </div>
                        </div>
                
                    </div>
                </div>

                <div class="dropdown recipies-cat">
                    <button class="all-recipies-btn">Blog</button>
                    <div class="dropdown-content information-grid">
                        <div class="dropdown-heading">
                            <span>Nutrition</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Healthy snacks</a>
                                <a href="#" class="nav-link">All about sugar</a>
                                <a href="#" class="nav-link">Is alcohol really bad ?</a>
                                <a href="#" class="nav-link">Learn about portions size</a>
                                <a class="view-more nav-link" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading">
                            <span>Workout related</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">What to eat before and after training</a>
                                <a href="#" class="nav-link">How much proteins ?</a>
                                <a href="#" class="nav-link">Gain weight the right way</a>
                                <a href="#" class="nav-link">Breakfasts for champions</a>
                                <a class="view-more nav-link" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading">
                            <span>Diets</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Carnivore Die</a>
                                <a href="#" class="nav-link">Veganism</a>
                                <a href="#" class="nav-link">Paleo</a>
                                <a href="#" class="nav-link">If It Fits Your Macros</a>
                                <a class="view-more nav-link" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading">
                            <span>Quick and easy</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Food for the office</a>
                                <a href="#" class="nav-link">Grab and run</a>
                                <a href="#" class="nav-link">Easy in the morning</a>
                                <a href="#" class="nav-link">Simple dinner tips</a>
                                <a class="view-more nav-link" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading">
                            <span>Quick and easy</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Food for the office</a>
                                <a href="#" class="nav-link">Grab and run</a>
                                <a href="#" class="nav-link">Easy in the morning</a>
                                <a href="#" class="nav-link">Simple dinner tips</a>
                                <a class="view-more nav-link" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading">
                            <span>Quick and easy</span>
                            <div class="dropdown-links">
                                <a href="#" class="nav-link">Food for the office</a>
                                <a href="#" class="nav-link">Grab and run</a>
                                <a href="#" class="nav-link">Easy in the morning</a>
                                <a href="#" class="nav-link">Simple dinner tips</a>
                                <a class="view-more nav-link" href="#">view more...</a>
                            </div>
                        </div>
                        <div class="dropdown-heading all-categories-link">
                            <a href=""><span>Check all of our articles here</span></a>
                        </div>
                    </div>
                </div>
            </article>

            <article class="user-shortcut-buttons">
                <div class="wrapper sign-up-links">
                    <a href="">Login</a>
                    <span>/</span>
                    <a href="">Register</a>
                    <a href="" class="logout-btn">Logout</a>
        
                        <button class="user-profile-shortcut-btn"><i class="fa-regular fa-user"></i></button>
                </div>
               
            </article>

            <article class="nav-item search">
                <button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </article>

            <article class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </article>
        </nav>
    </header>
    )
}