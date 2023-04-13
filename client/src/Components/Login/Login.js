import styles from './Login.module.css';

import { Link } from 'react-router-dom';
import * as authService from '../../service/authService.js';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

export const Login = ({
}) => {

    const { userLogin } = useContext(AuthContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const userData = Object.fromEntries(new FormData(e.target));

        /* TRY CATCH in ALL AJAX */

        authService
            .login(userData)
            .then(result => {
                userLogin(result);
            })
    }

    return (
        <section className={styles["login-section"]}>
            <h1>Login</h1>
            <form onSubmit={onSubmitHandler}>
                <div className={styles["text-field"]}>
                    <input
                        type="text"
                        required
                        name="email" />
                    <span></span>
                    <label forname="email">Email</label>
                </div>
                <div className={styles["text-field"]}>
                    <input
                        type="password"
                        required
                        name="password" />
                    <span></span>
                    <label forname="password">Password</label>
                </div>
                <div className={styles["wrapper"]}>
                    <button type="submit" className={styles["submit--login-btn"]}>Login</button>
                    <div className={styles["sign-up-link"]}>
                        <p>Not a member ?</p>
                        <Link to="/users/register">Sign up</Link>
                    </div>
                </div>
            </form>
        </section>
    );
}