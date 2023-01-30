import styles from './ArticleDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCamera, faPenToSquare, faTrashCan, faImages, faHeart, faFireBurner } from '@fortawesome/free-solid-svg-icons'

export default function ArticleDetails() {
    return (
        <>
            <section className={styles["header"]}>
                <article>
                    <h1 className={styles["header__article"]}>The importance of proteins</h1>
                </article>
                <article>
                    <q className={styles["header__descr"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nesciunt deleniti error
                        necessitatibus quis architecto aspernatur animi ea autem? Repudiandae, repellat alias asperiores quasi
                        culpa
                        officia neque animi veniam distinctio.
                    </q>
                </article>
            </section>

            <section className={styles["hero"]}>
                <article className={styles["article__content"]}>
                    <div className={styles["user-details"]}>
                        <div className={styles["img-holder"]}>
                            <img className={styles["profile-image"]}
                                src="https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d"
                                alt="" />
                        </div>
                        <div >
                            <p>Ivan Ivanov</p>
                            <p>Beginner</p>
                        </div>
                        <div className={styles["user__stats"]}>
                            <div className={styles["stats__wrapper"]}>
                                <FontAwesomeIcon icon={faUtensils} className={styles["icon"]}></FontAwesomeIcon>
                                <p>31</p>
                            </div>
                            <div className={styles["stats__wrapper"]}>
                                <FontAwesomeIcon icon={faCamera} className={styles["icon"]} ></FontAwesomeIcon>
                                <p>220</p>
                            </div>

                            <div className={styles["stats__wrapper"]}>
                                <FontAwesomeIcon icon={faFireBurner} className={styles["icon"]} ></FontAwesomeIcon>
                                <p>31</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles["user-icons"]}>
                        <div className={styles["wrapper"]}>
                            <button className={styles["btn"]}>
                                <FontAwesomeIcon icon={faPenToSquare} className={styles["icon"]}></FontAwesomeIcon>
                            </button>
                            <span>Edit</span>
                        </div>
                        <div className={styles["wrapper"]}>
                            <button className={styles["btn"]}>
                                <FontAwesomeIcon icon={faTrashCan} className={styles["icon"]}></FontAwesomeIcon>
                            </button>
                            <span>Delete</span>
                        </div>
                        <div className={styles["wrapper"]}>
                            <button className={styles["btn"]}>
                                <FontAwesomeIcon icon={faImages} className={styles["icon"]}></FontAwesomeIcon>
                            </button>
                            <span>Change photo</span>
                        </div>
                        <div className={styles["wrapper"]}>
                            <button className={styles["btn"]}>
                                <FontAwesomeIcon icon={faHeart} className={styles["icon"]}></FontAwesomeIcon>
                            </button>
                            <span>Favourites</span>
                        </div>
                    </div>
                </article>

                <article className={styles["article-icons-bar"]}>
                    <div className={styles["icons"]}>
                        <div className={styles["wrapper"]}>
                            <span>Category: </span>
                            <p>Proteins</p>
                        </div>
                        <div className={styles["wrapper"]}>
                            <span>Added on: </span>
                            <p>21.10.2022</p>
                        </div>
                        <div className={styles["wrapper"]}>
                            <span>Last edited: </span>
                            <p>21.10.2022</p>
                        </div>
                    </div>

                    <img src="/img/dishes/Best-Lasagna-550.jpg" className="image" alt="" />
                </article>
            </section>

            <section className={styles["content"]}>
                <article>
                    <h3>Why to count proteins ?</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eum fugit assumenda eius dignissimos
                        sunt, optio corrupti ipsam asperiores iure pariatur ullam officiis quisquam possimus qui. Facilis
                        adipisci numquam commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi atque sapiente, corrupti esse, magni, ipsum nihil ut alias eaque deserunt similique laboriosam magnam dolorum distinctio impedit voluptate nulla iusto?</p>
                </article>
            </section>
        </>
    );
}