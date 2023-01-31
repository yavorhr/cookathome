import styles from './CatalogRecipes.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function CatalogRecipes() {
    return (
        <section>
            <article className={styles["search-bar"]}>
                <h1 className={styles["title"]}>What are you looking for ?</h1>
                <p className={styles["descr"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ad debitis tempore, incidunt
                    eveniet
                    voluptas at modi consequatur libero dolorem, mollitia delectus, voluptate laudantium sapiente explicabo
                    aut distinctio? Quos, sunt.</p>
                <form action="">
                    <input type="text" placeholder="Search your recipe..." name="" />
                    <button type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["icon"]}></FontAwesomeIcon>
                    </button>
                </form>
            </article>
            <h2 className={styles["section-title"]}>Recently added</h2>
            <ul className={styles["card-list"]} type="none">
                <li className={styles["list-item"]}>
                    <a href="#">
                        <div className={styles["img-holder"]}>
                            <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h3 className={styles["card-title"]}>Lasagna</h3>
                            <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                            <span>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>
                                30 mins
                            </span>
                        </div>
                    </a>
                </li>
                <li className={styles["list-item"]}>
                    <a href="#">
                        <div className={styles["img-holder"]}>
                            <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h3 className={styles["card-title"]}>Lasagna</h3>
                            <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                            <span>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>
                                30 mins
                            </span>
                        </div>
                    </a>
                </li>
                <li className={styles["list-item"]}>
                    <a href="#">
                        <div className={styles["img-holder"]}>
                            <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h3 className={styles["card-title"]}>Lasagna</h3>
                            <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                            <span>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>
                                30 mins
                            </span>
                        </div>
                    </a>
                </li>
                <li className={styles["list-item"]}>
                    <a href="#">
                        <div className={styles["img-holder"]}>
                            <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h3 className={styles["card-title"]}>Lasagna</h3>
                            <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                            <span>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>
                                30 mins
                            </span>
                        </div>
                    </a>
                </li>
                <li className={styles["list-item"]}>
                    <a href="#">
                        <div className={styles["img-holder"]}>
                            <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h3 className={styles["card-title"]}>Lasagna</h3>
                            <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                            <span>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>
                                30 mins
                            </span>
                        </div>
                    </a>
                </li>
                <li className={styles["list-item"]}>
                    <a href="#">
                        <div className={styles["img-holder"]}>
                            <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h3 className={styles["card-title"]}>Lasagna</h3>
                            <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                            <span>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>
                                30 mins
                            </span>
                        </div>
                    </a>
                </li>
                <li className={styles["list-item"]}>
                    <a href="#">
                        <div className={styles["img-holder"]}>
                            <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h3 className={styles["card-title"]}>Lasagna</h3>
                            <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                            <span>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>
                                30 mins
                            </span>
                        </div>
                    </a>
                </li>
                <li className={styles["list-item"]}>
                    <a href="#">
                        <div className={styles["img-holder"]}>
                            <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h3 className={styles["card-title"]}>Lasagna</h3>
                            <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                            <span>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>
                                30 mins
                            </span>
                        </div>
                    </a>
                </li>
                <li className={styles["list-item"]}>
                    <a href="#">
                        <div className={styles["img-holder"]}>
                            <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h3 className={styles["card-title"]}>Lasagna</h3>
                            <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                            <span>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>
                                30 mins
                            </span>
                        </div>
                    </a>
                </li>
                <li className={styles["list-item"]}>
                    <a href="#">
                        <div className={styles["img-holder"]}>
                            <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h3 className={styles["card-title"]}>Lasagna</h3>
                            <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                            <span>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>
                                30 mins
                            </span>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    );
}