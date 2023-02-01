import styles from './Favorites.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMagnifyingGlass, faClock } from '@fortawesome/free-solid-svg-icons'

export const Favorites = () => {


    return (
        <>
            <section>
                <article className={styles["favorites__search-bar"]}>
                    <h1 className={styles["title"]}>Search through your recipies</h1>
                    <form action="">
                        <input type="text" placeholder="Type recipe title..." name="" />
                        <button type="submit">
                          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["icon"]}></FontAwesomeIcon>
                        </button>
                    </form>
                </article>
            </section>
            <section className={styles["my-recipies"]}>
                <h2 className={styles["my-recipies__title"]}>My recipies</h2>
                <ul className={styles["card-list"]} type="none">
                    <li className={styles["list-item"]}>
                        <a href="#">
                            <div className={styles["img-holder"]}>
                                <img src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                            </div>
                            <div className={styles["card-info"]}>
                                <h3 className={styles["card-title"]}>Lasagna</h3>
                                <p className={styles["card-descr"]}>
                                    Very delicious dish for the whole family...
                                </p>
                                <span>
                                   <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
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
                                <p className={styles["card-descr"]}>
                                    Very delicious dish for the whole family...
                                </p>
                                <span>
                                   <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
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
                                <p className={styles["card-descr"]}>
                                    Very delicious dish for the whole family...
                                </p>
                                <span>
                                   <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
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
                                <p className={styles["card-descr"]}>
                                    Very delicious dish for the whole family...
                                </p>
                                <span>
                                   <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
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
                                <p className={styles["card-descr"]}>
                                    Very delicious dish for the whole family...
                                </p>
                                <span>
                                   <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
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
                                <p className={styles["card-descr"]}>
                                    Very delicious dish for the whole family...
                                </p>
                                <span>
                                   <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
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
                                <p className={styles["card-descr"]}>
                                    Very delicious dish for the whole family...
                                </p>
                                <span>
                                   <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
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
                                <p className={styles["card-descr"]}>
                                    Very delicious dish for the whole family...
                                </p>
                                <span>
                                   <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                    30 mins
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </>

    );
}