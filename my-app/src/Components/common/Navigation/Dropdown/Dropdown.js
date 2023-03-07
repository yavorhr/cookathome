

import styles from './Dropdown.module.css';
import { useState } from "react";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu.js"

export const Dropdown = (props) => {
    const [open, setOpen] = useState(false);

    const data = [
        {
            season:
                ['/catalog-recipes/spring',
                    '/catalog-recipes/summer',
                    '/catalog-recipes/autumn',
                    '/catalog-recipes/winter']
        }, {
            'Meals of the day': ['/catalog-recipes/breakfast',
                '/catalog-recipes/lunch',
                '/catalog-recipes/dinner',
                '/catalog-recipes/snack']
        }]


    console.log(data);

    const clickHandler = (s) => {
        setOpen(false);
    }

    const recipesData = [{ menu: 'season', url: ['recipes/summer', 'recipes/winter', 'recipes/autumn', 'recipes/spring'] }]
    const articlesData = [{ menu: 'rec', url: ['1', '2', '3', '4'] }]

    return (
        <div className={styles['nav-item-dropdown-wrapper']}>
            <li className={styles['nav-item']}>
                <a href="#" className={styles['icon-button']} onClick={() => setOpen(!open)} >
                    {props.icon}
                </a>
                {open && props.title === 'Recipes' && <DropdownMenu data={data} onClickHandler={clickHandler} />}
                {open && props.title === 'Articles' && <DropdownMenu data={articlesData} onClickHandler={clickHandler} />}
            </li>

            {props.title && <span>{props.title}</span>}

        </div>);
}