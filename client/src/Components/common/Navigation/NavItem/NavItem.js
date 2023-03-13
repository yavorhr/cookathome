
import styles from './NavItem.module.css';
import { Link } from "react-router-dom";

export const NavItem = (props) => {

    return (
        <li className={styles["nav-item"]}>
            <Link to={props.url} className={styles["icon-button"]}  >
                {props.icon}
            </Link>
        </li>
    );
}