import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Search = () => {
    return (
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
        </article>);
}