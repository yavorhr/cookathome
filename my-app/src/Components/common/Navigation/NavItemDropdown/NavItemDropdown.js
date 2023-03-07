

import styles from './NavItemDropdown.module.css';

import { useState } from "react";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu.js";

export const NavItemDropdown = (props) => {
    const [open, setOpen] = useState(false);

    const recipesData = [{ menu: 'season', url: ['recipes/summer', 'recipes/winter', 'recipes/autumn', 'recipes/spring'] }]
    const articlesData = [{ menu: 'rec', url: ['1', '2', '3', '4'] }]

    return (
        <div className={styles['nav-item-dropdown-wrapper']}>
            <li className={styles['nav-item']}>
                <a href="#" className={styles['icon-button']} onClick={() => setOpen(!open)} >
                    {props.icon}
                </a>
                {open && props.title === 'Recipes' && <DropdownMenu data={recipesData} />}
                {open && props.title === 'Articles' && <DropdownMenu data={articlesData} />}
            </li>

            {props.title && <span>{props.title}</span>}

        </div>);
}