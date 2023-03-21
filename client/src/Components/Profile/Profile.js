import styles from './Profile.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCamera, faHeart, faClock, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/AuthContext.js';
import { useContext, useState } from 'react';

export const Profile = () => {
    const [currentUser, setCurrentUser] = useState({});

    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <section className={styles["user-profile"]}>
            <article className={styles["user-details"]}>
                <div className={styles["img-holder"]}>
                    <img src={user.imageUrl}
                        alt="" />
                    <p className="level">Level : <span>Chef</span></p>
                </div>
                <div className={styles["user-information"]}>
                    <div className={styles["user-personal-data"]}>
                        <div className={styles["wrapper"]}>
                            <div className={styles["name"]}>
                                <label>full name</label>
                                <p>{user["full-name"]}</p>
                            </div>
                            <div className={styles["username"]}>
                                <label>username</label>
                                <p>Ivanko</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles["email"]}>
                                <label>email</label>
                                <p>{user.email}</p>
                            </div>
                            <div className={styles["phone"]}>
                                <label>phone</label>
                                <p>0888333222</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles["user-icons"]}>
                        <div className={styles["wrapper"]}>
                            <button className={styles["btn"]}>
                                <FontAwesomeIcon icon={faUtensils} className={styles["icon"]}></FontAwesomeIcon>
                            </button>
                            <p>Cooked: <span>31</span></p>
                        </div>

                        <div className={styles["wrapper"]}>
                            <button className={styles["btn"]}>
                                <FontAwesomeIcon icon={faHeart} className={styles["icon"]}></FontAwesomeIcon>
                            </button>
                            <p>Favorites: <span>31</span></p>
                        </div>
                        <div className={styles["wrapper"]}>
                            <button className={styles["btn"]}>
                                <FontAwesomeIcon icon={faCamera} className={styles["icon"]}></FontAwesomeIcon>
                            </button>
                            <p>Gallery</p>
                        </div>
                    </div>
                </div>
            </article>

            <article className={styles["recipes"]}>
                <div>
                    <h2 className={styles["recipes-title"]}>Recently added</h2>
                    <ul className={styles["card-list"]} type="none">
                        <li>
                            <a href="#">
                                <div className={styles["card-item"]}>
                                    <img className={styles["card-item__img"]} src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                                    <h3 className={styles["card-title"]}>Lasagna</h3>
                                    <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                                    <span>
                                        <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>30
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={styles["card-item"]}>
                                    <img className={styles["card-item__img"]} src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                                    <h3 className={styles["card-title"]}>Lasagna</h3>
                                    <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                                    <span>
                                        <FontAwesomeIcon icon={faClock} className={styles["icon"]}>
                                        </FontAwesomeIcon>30
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={styles["card-item"]}>
                                    <img className={styles["card-item__img"]} src="/img/dishes/Best-Lasagna-550.jpg" alt="" />
                                    <h3 className={styles["card-title"]}>Lasagna</h3>
                                    <p className={styles["card-descr"]}>Very delicious dish for the whole family...</p>
                                    <span>
                                        <FontAwesomeIcon icon={faClock} className={styles["icon"]}></FontAwesomeIcon>30
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
        </section>

    );


}