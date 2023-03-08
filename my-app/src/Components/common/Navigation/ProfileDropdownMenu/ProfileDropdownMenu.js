

import styles from './ProfileDropdownMenu.module.css';
import { useState } from "react";


export const ProfileDropdownMenu = (props) => {
    const [open, setOpen] = useState(false);


    return (
        <>
            <button href="#" className={styles["icon-button"]} onClick={() => setOpen(!open)} >
                {props.icon}
            </button>
            {open && props.children}
        </>
    )
}