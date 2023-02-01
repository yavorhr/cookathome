import styles from './Login.module.css'

export const Login = () => {
    return (
        <section className={styles["login-section"]}>
            <h1>Login</h1>
            <form action="">
                <div className={styles["text-field"]}>
                    <input type="text" required />
                    <span></span>
                    <label forname="username">Username</label>
                </div>
                <div className={styles["text-field"]}>
                    <input type="password" required />
                    <span></span>
                    <label forname="password">Password</label>
                </div>
                <button type="submit" className={styles["submit--login-btn"]}>Login</button>
                <div className={styles["sign-up-link"]}>
                    <p>Not a member ?</p>
                    <a href="#">Sign up</a>
                </div>
            </form>
        </section>
    );
}