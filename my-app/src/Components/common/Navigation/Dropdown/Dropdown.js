

import styles from './Dropdown.module.css';
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { DropdownMenu } from "../DropdownMenu/DropdownMenu.js"

import { urlMappingDataRecipes } from '../../../../service/recipeService.js';
import { urlMappingDataArticles } from '../../../../service/articleService.js';

export const Dropdown = (props) => {
    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        setOpen(false);
    }

    let dropdownRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <div className={styles['nav-item-dropdown-wrapper']} ref={dropdownRef}>
            <li className={styles['nav-item']}>
                <Link to="#" className={styles['icon-button']} onClick={() => setOpen(!open)} >
                    {props.icon}
                </Link>

                {open && props.title === 'Recipes' &&
                    <DropdownMenu
                        data={urlMappingDataRecipes}
                        onClickHandler={clickHandler} />}
                {open && props.title === 'Articles' &&
                    <DropdownMenu
                        data={urlMappingDataArticles}
                        onClickHandler={clickHandler} />}
            </li>

            {props.title && <span>{props.title}</span>}
        </div>);
}