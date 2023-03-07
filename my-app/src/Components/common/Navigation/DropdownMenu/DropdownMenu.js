import styles from './DropdownMenu.module.css';
import { Link } from 'react-router-dom';

export const DropdownMenu = (props) => {




    return (
        <div className={styles["dropdown"]} >
            <div className={`${styles["dropdown-content"]} ${styles["information-grid"]}`}>

                {props.data.map(d =>
                    <div className={styles["dropdown-heading"]}>
                        <span>{Object.keys(d)}</span>
                        <div className={styles["dropdown-links"]}>
                            {d[Object.keys(d)].map(l => <Link onClick={() => props.onClickHandler(false)} to={l} className={styles['nav-link']}>{Object.keys(d)}</Link> )}
                        </div>
                    </div>)}


                <div className={styles["dropdown-heading"]}>
                    <span>Meals of the day</span>
                    <div className={styles["dropdown-links"]}>
                        <Link to="/catalog-recipes/breakfast" className={styles['nav-link']}>Breakfast</Link>
                        <Link to="/catalog-recipes/lunch" className={styles['nav-link']}>Lunch</Link>
                        <Link to="/catalog-recipes/dinner" className={styles['nav-link']}>Dinner</Link>
                        <Link to="/catalog-recipes/snack" className={styles['nav-link']}>Snack</Link>
                    </div>
                </div>
                <div className={styles["dropdown-heading"]}> <span>Main ingredients</span>
                    <div className={styles["dropdown-links"]}>
                        <Link to="#" className={styles['nav-link']}>Pork</Link>
                        <Link to="#" className={styles['nav-link']}>Chicken</Link>
                        <Link to="#" className={styles['nav-link']}>Fish</Link>
                        <Link to="#" className={styles['nav-link']}>Lamb</Link>
                        <Link className={`${styles['view-more']} ${styles['nav-link']}`} to="#">view more...</Link>
                    </div>
                </div>
                <div className={styles["dropdown-heading"]}> <span>Kitchen</span>
                    <div className={styles["dropdown-links"]}>
                        <Link to="#" className={styles['nav-link']}>Bulgarian</Link>
                        <Link to="#" className={styles['nav-link']}>Turkish</Link>
                        <Link to="#" className={styles['nav-link']}>Serbian</Link>
                        <Link to="#" className={styles['nav-link']}>Lamb</Link>
                        <Link className={`${styles['view-more']} ${styles['nav-link']}`} to="#">view more...</Link>
                    </div>
                </div>
                <div className={styles["dropdown-heading"]}> <span>Quick & Easy</span>
                    <div className={styles["dropdown-links"]}>
                        <Link to="#" className={styles['nav-link']}>Breakfasts for quickers</Link>
                        <Link to="#" className={styles['nav-link']}>Quick lunches</Link>
                        <Link to="#" className={styles['nav-link']}>Easy dinners</Link>
                        <Link to="#" className={styles['nav-link']}>Desserts in 10 minutes</Link>
                        <Link className={`${styles['view-more']} ${styles['nav-link']}`} to="#">view more...</Link>
                    </div>
                </div>

                <div className={styles["dropdown-heading"]}> <span>From zero to hero</span>
                    <div className={styles["dropdown-links"]}>
                        <Link to="#" className={styles['nav-link']}>Beginners</Link>
                        <Link to="#" className={styles['nav-link']}>Intermidiates</Link>
                        <Link to="#" className={styles['nav-link']}>Advanced</Link>
                        <Link to="#" className={styles['nav-link']}>For Cheffs!</Link>
                    </div>
                </div>
                <div className={styles["dropdown-heading"]}> <span>Count the calories</span>
                    <div className={styles["dropdown-links"]}>
                        <Link to="#" className={styles['nav-link']}>Up to 200 kcal</Link>
                        <Link to="#" className={styles['nav-link']}>Up to 500 kcal</Link>
                        <Link to="#" className={styles['nav-link']}>Up to 800 kcal</Link>
                        <Link to="#" className={styles['nav-link']}>More than 800 kcal</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}