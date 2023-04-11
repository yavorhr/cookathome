import styles from './Category.module.css';

export const Category = ({ data, onSelect }) => {
    return (
        <li onClick={(e) => onSelect(e)} className={styles["category"]}>
            {data}
        </li>
    );
}