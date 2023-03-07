import { Link } from "react-router-dom";

export const DropdownItem = (props) => {
    return (
        <Link to={props.url} className="menu-item" onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu) }>
            <span className="icon-button">{props.leftIcon}</span>

            {props.children}

            <span className="icon-right">{props.rightIcon}</span>
        </Link>
    );
}