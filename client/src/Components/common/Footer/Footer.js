import styles from './Footer.module.css';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer>
            <ul className={styles["list-icons"]} type="none">
                <li>
                    <Link to="https://github.com/yavorhr">
                        <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.facebook.com/yavorhristozov">
                        <FontAwesomeIcon icon={faFacebookF} ></FontAwesomeIcon>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.instagram.com/ywanderwolf">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/yavorhr">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </Link>
                </li>
            </ul>
            <ul className={styles["list-links"]} type="none">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/catalog/recipes">Catalog</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                    <Link to="/groecery-list">Groceries</Link>
                </li>
                <li>
                    <Link to="/users/profile">Profile</Link>
                </li>
            </ul>
            <li className={styles["license"]}>
                <Link to="https://yavorhr.github.io/">© Yavor Hristozov</Link>
            </li>
        </footer>

    )
}

