import './login.css';

export default function Login() {
    return (
            <section className="login-section mrgn-auto">
                <h1>Login</h1>
                <form action="">
                    <div className="text-field">
                        <input type="text" required />
                        <span></span>
                        <label forname="username">Username</label>
                    </div>
                    <div className="text-field">
                        <input type="password" required />
                        <span></span>
                        <label forname="password">Password</label>
                    </div>
                    <button type="submit">Login</button>
                    <div className="sign-up-link">
                        <p>Not a member ?</p>
                        <a href="#">Sign up</a>
                    </div>
                </form>
            </section>
    );
}