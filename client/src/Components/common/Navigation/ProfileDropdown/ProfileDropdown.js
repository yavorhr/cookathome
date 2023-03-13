

import styles from './ProfileDropdown.module.css';
import { useEffect, useState, useRef } from "react";
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext.js';

import { ReactComponent as Arrow } from '../svg/arrow.svg';
import { Link } from 'react-router-dom';

export const ProfileDropdown = (props) => {
    const [open, setOpen] = useState(false);
    const [openBtn, setOpenBtn] = useState(false);

    const { user, userLogout } = useContext(AuthContext);
    const isLoggedIn = user.email;

    let className = open ? 'active' : 'inactive';
    let classNameBtn = openBtn ? 'active' : 'inactive';

    let dropdownRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setOpen(false);
                setOpenBtn(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    let openHandler = () => {
        setOpen(false);
    }

    const handleClick = () => {
        userLogout(user);
        openHandler()
    }

    return (
        <div ref={dropdownRef}>
            <button className={styles["profile-button"]} onClick={() => setOpen(!open)} >
                {isLoggedIn
                    ? <img src={user.imageUrl} className={styles['user-profile-img']} ></img>
                    : props.icon
                }
            </button>

            <div className={`${styles["dropdown"]} ${styles[className]}`} >
                {isLoggedIn ?
                    <>
                        <Link
                            className={styles["link-item"]}
                            to="/users/profile"
                            onClick={openHandler}>
                            Profile
                        </Link>
                        < div
                            className={styles['profile-wrapper']}
                            onClick={() => setOpenBtn(!openBtn)}>
                            <button
                                className={styles["create-btn"]}
                                to="/users/create" >Create
                                {openBtn && <Arrow />}
                            </button>
                        </div>

                        <button className={styles["logout-btn"]} onClick={() => handleClick()}>Logout</button>

                        <div className={`${styles["dropdown"]} ${styles["dropdown-create-btn"]} ${styles[classNameBtn]}`}>
                            <Link
                                className={styles["link-item"]}
                                to="/create/recipe"
                                onClick={openHandler}>Create Recipe</Link>
                            <Link
                                className={styles["link-item"]}
                                to="/create/recipe"
                                onClick={openHandler}>Create Article</Link>
                        </div>
                    </>

                    :
                    <>
                        <Link className={styles["link-item"]} to="/users/login">Login</Link>
                        <Link className={styles["link-item"]} to="/users/register">Register</Link></>
                }
            </div>
        </div>
    )

}

