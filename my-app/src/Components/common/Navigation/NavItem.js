
import { Link } from "react-router-dom";

export const NavItem = (props) => {

    return (
        <li className="nav-item">
            <Link href="#" className="icon-button"  >
                {props.icon}
            </Link>
        </li>
    );
}