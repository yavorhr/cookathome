
import styles from './DropdownMenu.module.css';
import React, { useState, useEffect, useRef } from 'react';

import { CSSTransition } from 'react-transition-group';
import { DropdownItem } from "../DropdownMenu/DropdownItem/DropdownItem.js";

import { ReactComponent as CogIcon } from '../svg//cog.svg';
import { ReactComponent as ChevronIcon } from '../svg/chevron.svg';
import { ReactComponent as ArrowIcon } from '../svg/arrow.svg';
import { ReactComponent as BoltIcon } from '../svg/bolt.svg';
export const DropdownMenu = (props) => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const setActiveMenuHandler = (menu) => {
        setActiveMenu(menu);
    }

    return (
        <div className={styles["dropdown"]} style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={100}
                className={styles["menu-primary"]}
                unmountOnExit
                onEnter={calcHeight}>
                <div className={styles["menu"]}>

                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="season"
                        setActiveMenu={setActiveMenuHandler}
                    >
                        Season
                    </DropdownItem>

                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="calories"
                        setActiveMenu={setActiveMenuHandler}
                    >
                        Calories
                    </DropdownItem>

                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="timeOfTheDay"
                        setActiveMenu={setActiveMenuHandler}>
                        Time
                    </DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'season'}
                timeout={100}
                className={styles["menu-secondary"]}
                unmountOnExit
                onEnter={calcHeight}>

                <div className={styles["menu"]}>
                    <DropdownItem
                        goToMenu="main"
                        leftIcon={<ArrowIcon />}
                        setActiveMenu={setActiveMenuHandler}>
                        <h2>Back</h2>
                    </DropdownItem>
                    <DropdownItem url={props.data[0].url[0]} leftIcon={<BoltIcon />}>Spring</DropdownItem >
                    <DropdownItem url={props.data[0].url[1]} leftIcon={<BoltIcon />}>Summer</DropdownItem>
                    <DropdownItem url={props.data[0].url[2]} leftIcon={<BoltIcon />}>Autumn</DropdownItem>
                    <DropdownItem url={props.data[0].url[3]} leftIcon={<BoltIcon />}>Winter</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'timeOfTheDay'}
                timeout={100}
                className={styles["menu-secondary"]}
                unmountOnExit
                onEnter={calcHeight}
            >
               <div className={styles["menu"]}>
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}
                        setActiveMenu={setActiveMenuHandler}>
                        <h2>Back</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Breakfst</DropdownItem>
                    <DropdownItem leftIcon="🐸">Lunch</DropdownItem>
                    <DropdownItem leftIcon="🦋">Snack</DropdownItem>
                    <DropdownItem leftIcon="🦔">Dinner</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'calories'}
                timeout={100}
                classNames={styles["menu-secondary"]}
                unmountOnExit
                onEnter={calcHeight}
            >
               <div className={styles["menu"]}>
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}
                        setActiveMenu={setActiveMenuHandler}>
                        <h2>Back</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘"> Under 200 </DropdownItem>
                    <DropdownItem leftIcon="🐸">Up to 500</DropdownItem>
                    <DropdownItem leftIcon="🦋">Up to 700</DropdownItem>
                    <DropdownItem leftIcon="🦔">Up to 1000</DropdownItem>
                </div>
            </CSSTransition>


        </div>
    );
}