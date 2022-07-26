import './register.css';

export default function Register() {
    return (
        <section className="register-section">
            <h1 className="title">Registration</h1>
            <form action="">
                <div className="user-details">
                    <div className="txt-fields">
                        <label forname="full-name">Full Name</label>
                        <input className="input" type="text" name="full-name" id="full-name" placeholder="Enter your name" />
                    </div>
                    <div className="txt-fields">
                        <label forname="username">Usnername</label>
                        <input type="text" name="username" id="username" placeholder="Enter your username" />
                    </div>
                    <div className="txt-fields">
                        <label forname="username">Email</label>
                        <input type="text" name="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="txt-fields">
                        <label forname="phone-number">Phone number</label>
                        <input type="text" name="phone-number" id="phone-number" placeholder="Enter your number" />
                    </div>
                    <div className="txt-fields">
                        <label forname="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" />
                    </div>
                    <div className="txt-fields">
                        <label forname="re-pass">Confirm Password</label>
                        <input type="text" name="re-pass" id="re-pass" placeholder="Confirm your password" />
                    </div>
                </div>
                <button type="submit">Register</button>
            </form>
        </section>
    );
}