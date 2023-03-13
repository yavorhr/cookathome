import styles from './GalleryArticles.module.css'
import * as articleService from '../../../service/articleService.js'

export const GalleryArticles = ({
    articles
}) => {

    const sorted = articleService.sortByDate(articles);

    return (
        <section className={styles["gallery"]}>
            <ul type="none">
                {
                    sorted.map(a =>
                        <li className={styles["article-item"]} key={a._id}>
                            <a href="">
                                <img src={a.imageUrl} alt="recipe details" />
                                <div className={styles["article-item__info"]}>
                                    <h3>{a.title}</h3>
                                    <p>{a.createdOn}<span>{a.author}</span></p>
                                </div>
                            </a>
                        </li>)
                }
            </ul>
        </section>
    )
}