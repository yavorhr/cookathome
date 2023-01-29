import './footer.css'

export const Footer = () => {
    return (
        <footer>
            <ul className="list-icons" type="none">
                <li>
                    <a href="">
                        <i className="fa-brands fa-twitter" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-brands fa-facebook" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-brands fa-instagram" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-brands fa-linkedin" />
                    </a>
                </li>
            </ul>
            <ul className="list-links" type="none">
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