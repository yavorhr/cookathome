import styles from './DropdownMenu.module.css';

import { DropdownHeading } from './DropdownHeading.js/DropdownHeading.js';
import { Link } from 'react-router-dom';

export const DropdownMenu = (props) => {

    return (
        <div className={styles["dropdown"]} >
            <div className={`${styles["dropdown-content"]} ${styles["information-grid"]}`}>
                {props.data.map(d =>
                    <DropdownHeading
                        key={Object.keys(d)}
                        obj={d}
                        onClickHandler={props.onClickHandler} />
                )}
            </div>
        </div>
    );
}

