
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
        <nav className="navbar">
            <ul className="navbar-nav">
                <div className="wrapper">
                    <Link to="/">
                        <img className='logo' src="../img/logo.png" />
                    </Link>
                    <NavItem icon={<Favorites />} className='favorites-link' />
                    <NavItem icon={<Bag />} />
                </div>

                <div className="wrapper-dropdown">
                    <NavItemDropdown icon={<Recipes />} title='Recipes' />
                    <NavItemDropdown icon={<Articles />} title='Articles' />
                </div>

                <div className="wrapper">
                    <article className="user-shortcut-buttons">
                        <div className="sign-up-links">
                            <Link to="/users/login">Login</Link>
                            <span>/</span>
                            <Link to="/users/register">Register</Link>
                            <a href="" className="logout-btn">Logout</a>
                            <Link to="/users/profile"
                                className="user-profile-shortcut-link" >
                                <Profile className='icon-button profile' />
                            </Link>
                        </div>
                    </article>
                </div>

                <SearchComponent />

            </ul>
        </nav>
    );
}