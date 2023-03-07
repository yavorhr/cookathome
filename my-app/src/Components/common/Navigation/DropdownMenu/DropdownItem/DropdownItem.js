import { Link } from "react-router-dom";
import styles from './DropdownItem.module.css';

export const DropdownItem = (props) => {
    return (
        <Link to={props.url} className={styles["menu-item"]} onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            <span className={styles["icon-button"]}>{props.leftIcon}</span>

            {props.children}

            <span className={styles["icon-right"]}>{props.rightIcon}</span>
        </Link>
    );
}