import '../../App.css';
import styles from './RecipeDetails.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCamera, faFireBurner, faPenToSquare, faTrashCan, faCircleCheck, faHeart, faClock, faPlus, } from '@fortawesome/free-solid-svg-icons'

export const RecipeDetails = () => {

    return (
        <>
            <section className={styles["header"]}>
                <article>
                    <h1 className={styles["header__h1"]}>Pork steaks</h1>
                </article>
                <article>
                    <q className={styles["header__descr"]}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
                        nesciunt deleniti error necessitatibus quis architecto aspernatur animi
                        ea autem? Repudiandae, repellat alias asperiores quasi culpa officia
                        neque animi veniam distinctio.
                    </q>
                </article>
            </section>

            <section className={styles["hero"]}>
                <article className={`${styles["content"]} ${styles["dspl-flex-col-center"]}`}>
                    <div className={`${styles["user__details"]} ${styles["dspl-flex-col-center"]}`}>
                        <div className={styles["img-holder"]}>
                            <img
                                className={styles["user__image"]}
                                src="https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d"
                                alt=""
                            />
                        </div>
                        <div>
                            <p>Ivan Ivanov</p>
                            <p>Beginner</p>
                        </div>
                        <div className={`${styles["user__stats"]} ${styles["dspl-flex-row-center"]}`}>
                            <div className={styles["stats__wrapper"]}>
                            <FontAwesomeIcon className={styles["icon"]} icon={faUtensils}></FontAwesomeIcon>
                                <p>31</p>
                            </div>
                            <div className={styles["stats__wrapper"]}>
                            <FontAwesomeIcon className={styles["icon"]} icon={faCamera}></FontAwesomeIcon>
                                <p>220</p>
                            </div>
                            <div className={styles["stats__wrapper"]}>
                            <FontAwesomeIcon className={styles["icon"]} icon={faFireBurner}></FontAwesomeIcon>
                                <p>31</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["user__icons"]}>
                        <div className={styles["main-wrap"]}>
                            <div className={styles["wrapper"]}>
                                <button className={styles["btn"]}>
                                    <FontAwesomeIcon className={styles["icon"]} icon={faPenToSquare}></FontAwesomeIcon>
                                    Edit
                                </button>
                            </div>
                            <div className={styles["wrapper"]}>
                                <button className={styles["btn"]}>
                                    <FontAwesomeIcon className={styles["icon"]} icon={faTrashCan}></FontAwesomeIcon>
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div className={styles["main-wrap"]}>
                            <div className={styles["wrapper"]}>
                                <button className={styles["btn"]}>
                                    <FontAwesomeIcon className={styles["icon"]} icon={faHeart}></FontAwesomeIcon>
                                    Favorites
                                </button>
                            </div>
                            <div className={styles["wrapper"]}>
                                <button className={styles["btn"]}>
                                    <FontAwesomeIcon className={styles["icon"]} icon={faCircleCheck}></FontAwesomeIcon>

                                    Cooked
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
                <article className={`${styles["article-img-icons"]} ${styles["mrgn-auto"]}`}>
                    <div className={`${styles["icons"]} ${styles["dspl-flex-row-center"]}`}>
                        <div className={`${styles["wrapper"]} ${styles["dspl-flex-col-center"]}`}>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                            <span>Prep time:</span>
                            <p />
                        </div>
                        <div className={`${styles["wrapper"]} ${styles["dspl-flex-col-center"]}`}>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                            <span>Cook time:</span>
                            <p />
                        </div>
                        <div className={`${styles["wrapper"]} ${styles["dspl-flex-col-center"]}`}>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                            <span>Total time:</span>
                            <p />
                        </div>
                        <div className={`${styles["wrapper"]} ${styles["dspl-flex-col-center"]}`}>
                            <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>
                            <span>Portions:</span>
                            <p />
                        </div>
                    </div>
                    <div className={styles["image-grid"]}>
                        <img
                            className={`${styles["image-grid-col-2"]} ${styles["image-grid-row-2"]}`}
                            src="/img/details/pork (1).jpg"
                            alt="recipe details"
                        />
                        <img src="/img/details/pork (2).jpg" alt="recipe details" />
                        <img src="/img/details/pork (3).jpg" alt="recipe details" />
                        <img src="/img/details/pork (4).jpg" alt="recipe details" />
                        <div className={`${styles["add-image-container"]} ${styles["mrgn-auto"]} ${styles["dspl-flex-col-center"]}`}>
                            <label htmlFor="images">+ Add images</label>
                            <br />
                            <span>up to 4 images</span>
                            <input type="file" name="images" className="add-img" />
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <ul className={`${styles["products"]} ${styles["mrgn-auto"]}`}>
                    <h2 className={styles["title"]}>Products</h2>

                    <li className={styles["food-item"]}>
                        <p>Tomatoes</p>
                        <button className={styles["remove"]}>
                            <FontAwesomeIcon className={styles["icon"]} icon={faTrashCan}></FontAwesomeIcon>
                        </button>
                        <button className={styles["add"]}>
                            <FontAwesomeIcon className={styles["icon"]} icon={faPlus}></FontAwesomeIcon>
                        </button>
                    </li>
                    <li className={styles["food-item"]}>
                        <p>Tomatoes</p>
                        <button className={styles["remove"]}>
                            <FontAwesomeIcon className={styles["icon"]} icon={faTrashCan}></FontAwesomeIcon>
                        </button>
                        <button className={styles["add"]}>
                            <FontAwesomeIcon className={styles["icon"]} icon={faPlus}></FontAwesomeIcon>
                        </button>
                    </li>
                    <li className={styles["food-item"]}>
                        <p>Tomatoes</p>
                        <button className={styles["remove"]}>
                            <FontAwesomeIcon className={styles["icon"]} icon={faTrashCan}></FontAwesomeIcon>
                        </button>
                        <button className={styles["add"]}>
                            <FontAwesomeIcon className={styles["icon"]} icon={faPlus}></FontAwesomeIcon>
                        </button>
                    </li>
                    <li className={styles["food-item"]}>
                        <p>Tomatoes</p>
                        <button className={styles["remove"]}>
                            <FontAwesomeIcon className={styles["icon"]} icon={faTrashCan}></FontAwesomeIcon>
                        </button>
                        <button className={styles["add"]}>
                            <FontAwesomeIcon className={styles["icon"]} icon={faPlus}></FontAwesomeIcon>
                        </button>
                    </li>
                </ul>
            </section>
            <section>
                <div className={styles["cooking-process"]}>
                    <h2 className={styles["title"]}>How to cook</h2>
                    <p>
                        Place the fish on a cutting board and cut into 2-inch pieces. Set aside.
                        In a large pot, bring 2 quarts of water to a boil. Add the soba noodles
                        and cook for 2 to 3 minutes, or until tender but still a little firm.
                        Drain in a colander and rinse under cold running water to remove the
                        surface starch. Set the same pot you used to cook the noodles over high
                        heat and add chicken stock and 1 cup water. Bring the liquid to a boil..
                        Add the edamame and fish to the pot and cover with a lid. Cook at a
                        gentle simmer (small bubbles around the edges) for 3 to 5 minutes, or
                        until the fish is just cooked through and is opaque in the center. Exact
                        cooking time will depend upon the thickness of the fish pieces.. With a
                        slotted spoon, remove the fish from the broth and divide it among the
                        bowls, placing it on top of the noodles. Ladle the soup over the bowls
                        of noodles and top each with chopped chives.
                    </p>
                </div>
            </section>
        </>

    );
}