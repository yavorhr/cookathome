import styles from './Login.module.css';

import { Link } from 'react-router-dom';
import * as authService from '../../service/authService.js';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { useState } from 'react';

export const Login = () => {
    const [sucessLogin, setSuccessLogin] = useState(true);
    const { userLogin } = useContext(AuthContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const userData = Object.fromEntries(new FormData(e.target));

        authService
            .login(userData)
            .then(result => {
                if (result.code == 403) {
                    setSuccessLogin(false);
                    return;
                }
                userLogin(result)
            });
    }

    return (
        <div className={styles["wrapper"]}>
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
                        {!sucessLogin && <p className={`${styles["error"]} ${styles["name"]}`}>Login or password don't match!</p>}
                        <div className={styles["sign-up-link"]}>
                            <p>Not a member ?</p>
                            <Link to="/users/register">Sign up</Link>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}