import styles from './Footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer>
            <ul className={styles["list-icons"]} type="none">
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faFacebookF} ></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
            <ul className={styles["list-links"]} type="none">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Recipies</a>
                </li>
                <li>
                    <a href="">Newsletter</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
                <li>
                    <a href="">Team</a>
                </li>
            </ul>
            <p>© Yavor Hristozov</p>
        </footer>

    )
}