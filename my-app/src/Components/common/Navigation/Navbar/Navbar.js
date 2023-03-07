
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

import { ReactComponent as Favorites } from '../svg/favorites.svg';
import { ReactComponent as Bag } from '../svg//bag.svg';
import { ReactComponent as Profile } from '../svg//profile3.svg';
import { ReactComponent as Recipes } from '../svg/ladle.svg';
import { ReactComponent as Articles } from '../svg/svg/write.svg';

import { ReactComponent as Articles } from '';

import { SearchComponent } from "./Search/SearchComponent.js";
import { NavItemDropdown } from "../NavItemDropdown/NavItemDropdown.js";
import { NavItem } from '../NavItem/NavItem.js'

export const Navbar = () => {
    return (
        <nav className={styles["navbar"]}>
            <ul className={styles["navbar-nav"]}>
                <div className={styles["wrapper"]}>
                    <Link to="/">
                        <img className={styles["logo"]} src="../img/logo.png" />
                    </Link>
                    <NavItem icon={<Favorites />} />
                    <NavItem icon={<Bag />} />
                </div>

                <div className={styles["wrapper-dropdown"]}>
                    <NavItemDropdown icon={<Recipes />} title='Recipes' />
                    <NavItemDropdown icon={<Articles />} title='Articles' />
                </div>

                <div className={styles["wrapper"]}>
                    <article className={styles["user-shortcut-buttons"]}>
                        <div className={styles["sign-up-links"]}>
                            <Link to="/users/login">Login</Link>
                            <span>/</span>
                            <Link to="/users/register">Register</Link>
                            <a href="" className="logout-btn">Logout</a>
                            <Link to="/users/profile"
                                className={styles["user-profile-shortcut-link"]} >
                                <Profile className={styles[`${"icon-button"} ${"profile"}`]} />
                            </Link>
                        </div>
                    </article>
                </div>

                <SearchComponent />

            </ul>
        </nav>
    );
}