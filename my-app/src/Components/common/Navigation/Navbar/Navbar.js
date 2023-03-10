
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext.js';

import { ReactComponent as Favorites } from '../svg/favorites.svg';
import { ReactComponent as Bag } from '../svg//bag.svg';
import { ReactComponent as Profile } from '../svg//profile3.svg';
import { ReactComponent as Recipes } from '../svg/ladle.svg';
import { ReactComponent as Articles } from '../svg/write.svg';
import { ReactComponent as Search } from '../svg/search.svg';

import { Dropdown } from "../Dropdown/Dropdown.js";
import { NavItem } from '../NavItem/NavItem.js'
import { ProfileDropdown } from '../ProfileDropdown/ProfileDropdown.js';

export const Navbar = () => {
    const { user, userLogoutHandler } = useContext(AuthContext);

    const loggedIn = user.email;

    return (
        <nav className={styles["navbar"]}>
            <ul className={styles["navbar-nav"]}>

                <div className={styles["wrapper"]}>
                    <Link to="/">
                        <img className={styles["logo"]} src="../img/logo.png" />
                    </Link>
                    {loggedIn &&
                        <>
                            <NavItem url='/favorites' icon={<Favorites />} />
                            <NavItem url='/groecery-list' icon={<Bag />} />
                        </>
                    }
                </div>
                <div className={styles["wrapper-dropdown"]}>
                    <Dropdown icon={<Recipes />} title='Recipes' />
                    <Dropdown icon={<Articles />} title='Articles' />
                </div>

                <div className={styles["wrapper"]}>
                    <article className={styles["sign-wrapper"]}>
                        <div className={styles["sign-up-links"]}>
                            {!loggedIn
                                ?
                                <>
                                    <Link className={styles["link-item"]} to="/users/login">Login</Link>
                                    <span>/</span>
                                    <Link className={styles["link-item"]} to="/users/register">Register</Link>
                                </>
                                :
                                <>
                                    <button
                                        className={styles["link-item"]} onClick={() => userLogoutHandler(user)}>Logout</button>
                                    <span>/</span>
                                    <ProfileDropdown icon={<Profile />} />
                                </>
                            }
                        </div>
                    </article>
                </div>
                <NavItem icon={<Search />} url='/search' />
            </ul>
        </nav>
    );
}