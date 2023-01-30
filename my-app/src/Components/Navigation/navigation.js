import styles from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {
    return (
        <nav className={styles['navigation']}>
            <article className={`${styles['logo-fav-wrapper']}`}>
                <a href=""><img className={styles['logo']} src="../img/logo.png" /></a>
                <div className={`${styles['nav-item']} ${styles['favourites']}}`}>
                    <button className={styles["favorites__btn"]}>
                        <FontAwesomeIcon icon={faHeart} className={styles["fa-heart"]}></FontAwesomeIcon>
                    </button>
                </div>

            </article>

            <article className={styles["wrapper-links"]}>
                <div className={`${styles["dropdown"]} ${styles["recipies-cat"]}`}>
                    <button className={styles['all-recipies-btn']}>Recipies</button>
                    <div className={`${styles["dropdown-content"]} ${styles["information-grid"]}`}>
                        <div className={styles["dropdown-heading"]}>
                            <span>Season</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Breakfast</a>
                                <a href="#" className={styles['nav-link']}>Lunch</a>
                                <a href="#" className={styles['nav-link']}>Dinner</a>
                                <a href="#" className={styles['nav-link']}>Dessert</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}>
                            <span>During the day</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Breakfast</a>
                                <a href="#" className={styles['nav-link']}>Lunch</a>
                                <a href="#" className={styles['nav-link']}>Dinner</a>
                                <a href="#" className={styles['nav-link']}>Dessert</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
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
                                <a href="#" className={styles['nav-link']}>Desserts for beginners</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>

                        <div className={styles["dropdown-heading"]}> <span>Quick & Easy</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Breakfasts for quickers</a>
                                <a href="#" className={styles['nav-link']}>Quick lunches</a>
                                <a href="#" className={styles['nav-link']}>Easy dinners</a>
                                <a href="#" className={styles['nav-link']}>Desserts for beginners</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}> <span>Quick & Easy</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Breakfasts for quickers</a>
                                <a href="#" className={styles['nav-link']}>Quick lunches</a>
                                <a href="#" className={styles['nav-link']}>Easy dinners</a>
                                <a href="#" className={styles['nav-link']}>Desserts for beginners</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
                            </div>
                        </div>
                        <div className={styles["dropdown-heading"]}> <span>Quick & Easy</span>
                            <div className={styles["dropdown-links"]}>
                                <a href="#" className={styles['nav-link']}>Breakfasts for quickers</a>
                                <a href="#" className={styles['nav-link']}>Quick lunches</a>
                                <a href="#" className={styles['nav-link']}>Easy dinners</a>
                                <a href="#" className={styles['nav-link']}>Desserts for beginners</a>
                                <a className={`${styles['view-more']} ${styles['nav-link']}`} href="#">view more...</a>
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
                                <a href="#" className={styles['nav-link']}>How much proteins ?</a>
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
                <div className={`${styles["wrapper"]} ${styles["sign-up-links"]}`}>
                    <a href="">Login</a>
                    <span>/</span>
                    <a href="">Register</a>
                    <a href="" className={styles["logout-btn"]}>Logout</a>

                    <button
                        className={styles["user-profile-shortcut-btn"]}>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </button>
                </div>
            </article>
            <article className={`${styles["nav-item"]} ${styles["search"]}`}>
                <button className={styles["search__btn"]}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["search__icon"]} ></FontAwesomeIcon>
                </button>
            </article>

            <article className={styles["hamburger"]}>
                <span className={styles["bar"]}></span>
                <span className={styles["bar"]}></span>
                <span className={styles["bar"]}></span>
            </article>
        </nav>
    )
}