
import styles from './Navigation.module.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext.js';

import { ReactComponent as Favorites } from './svg/favorites.svg';
import { ReactComponent as Bag } from './svg//bag.svg';
import { ReactComponent as Profile } from './svg//profile3.svg';
import { ReactComponent as Recipes } from './svg/ladle.svg';
import { ReactComponent as Search } from './svg/search.svg';

import { Dropdown } from "./Dropdown/Dropdown.js";
import { NavItem } from './NavItem/NavItem.js'
import { ProfileDropdown } from './ProfileDropdown/ProfileDropdown.js';

export const Navigation = () => {
    const { user } = useContext(AuthContext);

    const loggedIn = user.email;

    /*TODO: to set profile picture instead of the user profile icon*/

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
                            <Dropdown icon={<Recipes/>} title='Recipes' />
                        </>
                    }
                </div>
                <div className={styles["wrapper"]}>
                    <article className={styles["sign-wrapper"]}>
                        <div className={styles["sign-up-links"]}>
                            {loggedIn && <p>Welcome, {user.email}</p>}
                            <ProfileDropdown icon={<Profile />} />
                        </div>
                    </article>
                    <NavItem icon={<Search />} url='/recipes/search' />
                </div>
              
            </ul>
        </nav>
    );
}