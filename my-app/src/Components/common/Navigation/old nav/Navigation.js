import styles from './Navigation.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faMagnifyingGlass, faCartShopping, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className={styles['navigation']}>
            <article className={`${styles['logo-fav-wrapper']}`}>
                <Link to="/">
                    <img className={styles['logo']} src="../img/logo.png" />
                </Link>
                <div className={`${styles['nav-item']} ${styles['favourites']}}`}>
                    <Link className={styles["favorites__link"]} to="favorites">
                        <FontAwesomeIcon icon={faHeart} className={styles["fa-heart"]}></FontAwesomeIcon>
                    </Link>
                </div>
                <div className={`${styles['nav-item']} ${styles['shopping-list']}}`}>
                    <Link className={styles["shopping-list__link"]} to="groecery-list">
                        <FontAwesomeIcon icon={faCartShopping} className={styles["fa-cart-shopping"]}></FontAwesomeIcon>
                    </Link>
                </div>
            </article>

            <article className={styles["wrapper-links"]}>
                <div className={styles["dropdown"]}>
                    <button className={styles['all-recipies-btn']}>Recipes</button>
                    <div className={`${styles["dropdown-content"]} ${styles["information-grid"]}`}>
                        <div className={styles["dropdown-heading"]}>
                            <span>Season</span>
                            <div className={styles["dropdown-links"]}>
                                <Link to="/catalog-recipes/spring" className={styles['nav-link']}>Spring</Link>
                                <Link to="/catalog-recipes/summer" className={styles['nav-link']}>Summer</Link>
                                <Link to="/catalog-recipes/autumn" className={styles['nav-link']}>Autumn</Link>
                                <Link to="/catalog-recipes/winter" className={styles['nav-link']}>Winter</Link>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}>
                            <span>Time of the day</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Breakfast</a>
                                <a href="#" className={styles['nav-link']}>Lunch</a>
                                <a href="#" className={styles['nav-link']}>Dinner</a>
                                <a href="#" className={styles['nav-link']}>Snack</a>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}> <span>Main ingredients</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Pork</a>
                                <a href="#" className={styles['nav-link']}>Chicken</a>
                                <a href="#" className={styles['nav-link']}>Fish</a>
                                <a href="#" className={styles['nav-link']}>Lamb</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}> <span>Kitchen</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Bulgarian</a>
                                <a href="#" className={styles['nav-link']}>Turkish</a>
                                <a href="#" className={styles['nav-link']}>Serbian</a>
                                <a href="#" className={styles['nav-link']}>Lamb</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}> <span>Quick & Easy</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Breakfasts for quickers</a>
                                <a href="#" className={styles['nav-link']}>Quick lunches</a>
                                <a href="#" className={styles['nav-link']}>Easy dinners</a>
                                <a href="#" className={styles['nav-link']}>Desserts in 10 minutes</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>

                        <div className={styles["dropdown-heading"]}> <span>From zero to hero</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Beginners</a>
                                <a href="#" className={styles['nav-link']}>Intermidiates</a>
                                <a href="#" className={styles['nav-link']}>Advanced</a>
                                <a href="#" className={styles['nav-link']}>For Cheffs!</a>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}> <span>Count the calories</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Up to 200 kcal</a>
                                <a href="#" className={styles['nav-link']}>Up to 500 kcal</a>
                                <a href="#" className={styles['nav-link']}>Up to 800 kcal</a>
                                <a href="#" className={styles['nav-link']}>More than 800 kcal</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles["dropdown"]} ${styles["recipies-cat"]}`} >
                    <button className={styles["all-recipies-btn"]}>Blog</button>
                    <div className={`${styles["dropdown-content"]} ${styles["information-grid"]}`} >
                        <div className={styles["dropdown-heading"]}>
                            <span>Nutrition</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Healthy snacks</a>
                                <a href="#" className={styles['nav-link']}>All about sugar</a>
                                <a href="#" className={styles['nav-link']}>Is alcohol really bad ?</a>
                                <a href="#" className={styles['nav-link']}>Learn about portions size</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}>
                            <span>Workout related</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>What to eat before and after training</a>
                                <a href="#" className={styles['nav-link']}>How much proteins a day ?</a>
                                <a href="#" className={styles['nav-link']}>Gain weight the right way</a>
                                <a href="#" className={styles['nav-link']}>Breakfasts for champions</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}>
                            <span>Diets</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Carnivore Die</a>
                                <a href="#" className={styles['nav-link']}>Veganism</a>
                                <a href="#" className={styles['nav-link']}>Paleo</a>
                                <a href="#" className={styles['nav-link']}>If It Fits Your Macros</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}>
                            <span>Quick and easy</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Food for the office</a>
                                <a href="#" className={styles['nav-link']}>Grab and run</a>
                                <a href="#" className={styles['nav-link']}>Easy in the morning</a>
                                <a href="#" className={styles['nav-link']}>Simple dinner tips</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}>
                            <span>Quick and easy</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Food for the office</a>
                                <a href="#" className={styles['nav-link']}>Grab and run</a>
                                <a href="#" className={styles['nav-link']}>Easy in the morning</a>
                                <a href="#" className={styles['nav-link']}>Simple dinner tips</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}>
                            <span>Quick and easy</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Food for the office</a>
                                <a href="#" className={styles['nav-link']}>Grab and run</a>
                                <a href="#" className={styles['nav-link']}>Easy in the morning</a>
                                <a href="#" className={styles['nav-link']}>Simple dinner tips</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>
                        <div className={`${styles["dropdown-heading"]} ${styles["all-categories-link"]}`}>
                            <a href=""><span>Check all of our articles here</span></a>
                        </div>
                    </div>
                </div>
            </article>

            <article className={styles["user-shortcut-buttons"]}>
                <div className={`${styles["sign-up-links"]}`}>
                    <Link to="/users/login">Login</Link>
                    <span>/</span>
                    <Link to="/users/register">Register</Link>
                    <a href="" className={styles["logout-btn"]}>Logout</a>
                    <Link to="/users/profile"
                        className={styles["user-profile-shortcut-link"]}>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </Link>
                </div>

            </article>
            
            <article className={`${styles["nav-item"]} ${styles["search"]}`}>
                <Link className={styles["search__link"]}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["search__icon"]}></FontAwesomeIcon>
                </Link>
            </article>

            <article className={styles["hamburger"]}>
                <span className={styles["bar"]}></span>
                <span className={styles["bar"]}></span>
                <span className={styles["bar"]}></span>
            </article>
        </nav>
    )
}