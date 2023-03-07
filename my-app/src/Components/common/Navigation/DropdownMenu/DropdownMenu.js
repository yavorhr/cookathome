import styles from './DropdownMenu.module.css';
import { Link } from 'react-router-dom';

export const DropdownMenu = (props) => {


    return (
        <div className={styles["dropdown"]} >
            <div className={`${styles["dropdown-content"]} ${styles["information-grid"]}`}>
                <div className={styles["dropdown-heading"]}>
                    <span>Season</span>
                    <div className={styles["dropdown-links"]}>
                        <Link onClick={()=> props.onClickHandler(false)} to="/catalog-recipes/spring" className={styles['nav-link']}>Spring</Link>
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
    );
}