import styles from './Register.module.css'

/*TODO:add upload button for user image */
/* TODO: validation hook for errors, so it can be re-usable to edit page */
/*TODO:// UX WAY TO POP UP ERRORS */

import { useState } from 'react';

export const Register = () => {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        'full-name': '',
        'username': '',
        'email': '',
        'phone-number': '',
        'password': '',
        'confirm-password': '',
        'imageUrl': ''
    });

    const onChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const userData = Object.fromEntries(new FormData(e.target));
        console.log(userData);
    }

    const minLengthCheck = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < bound
        }))
    }

    const emailValidation = (e) => {
        const regex = new RegExp(/^[A-Za-z0-9+_.-]+@(.+)$/);
        const urlInput = e.target.value;

        setErrors(state => ({
            ...state,
            [e.target.name]: !regex.test(urlInput)
        }))
    }

    const validImageUrl = (e) => {
        const regex = new RegExp(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i);
        const urlInput = e.target.value;

        setErrors(state => ({
            ...state,
            [e.target.name]: !regex.test(urlInput)
        }))
    }

    return (
        <section className={styles["register-section"]}>
            <h1 className={styles["title"]}>Registration</h1>
            <form className={styles["register-form"]}
                onSubmit={onSubmitHandler}>
                <div className={styles["user-details"]}>
                    <div className={styles["txt-fields"]}>
                        <label forname="full-name">Full Name</label>
                        <input
                            className={styles["input"]}
                            type="text"
                            name="full-name"
                            id="full-name"
                            placeholder="Enter your name"
                            onChange={onChangeHandler}
                            value={values['full-name']}
                            onBlur={(e) => minLengthCheck(e, 4)} />
                        {errors['full-name'] && <p className={`${styles["error"]} ${styles["full-name"]}`}>Names must be at least 4 characters long!</p>}
                    </div>
                    <div className={styles["txt-fields"]}>
                        <label forname="username">Usnername</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                            onChange={onChangeHandler}
                            value={values.username}
                            onBlur={(e) => minLengthCheck(e, 3)}
                        />
                        {errors.username && <p className={`${styles["error"]} ${styles["username"]}`}>Username must be at least 3 characters long!</p>}
                    </div>
                    <div className={styles["txt-fields"]}>
                        <label forname="username">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            onChange={onChangeHandler}
                            value={values.email}
                            onBlur={emailValidation}
                        />
                        {errors.email && <p className={`${styles["error"]} ${styles["email"]}`}>Please enter valid email!</p>}
                    </div>
                    <div className={styles["txt-fields"]}>
                        <label forname="phone-number">Phone number / not obligatory</label>
                        <input
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            placeholder="Enter your number"
                            onChange={onChangeHandler}
                            value={values['phone-number']} />
                    </div>
                    <div className={styles["txt-fields"]}>
                        <label forname="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            onChange={onChangeHandler}
                            value={values.password} />
                    </div>
                    <div className={styles["txt-fields"]}>
                        <label forname="confirm-password">Confirm Password</label>
                        <input
                            type="text"
                            name="confirm-password"
                            id="confirm-password"
                            placeholder="Confirm your password"
                            onChange={onChangeHandler}
                            value={values['confirm-password']} />
                    </div>
                    <div className={styles["txt-fields"]}>
                        <label forname="Image url">Image Url</label>
                        <input
                            className={styles["input"]}
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                            placeholder="Insert image url"
                            onChange={onChangeHandler}
                            value={values.imageUrl}
                            onBlur={validImageUrl} />
                        {errors.imageUrl && <p className={`${styles["error"]} ${styles["imageUrl"]}`}>Please enter valid image url!</p>}
                    </div>
                </div>
                <button type="submit" className={styles["register-submit-btn"]}>Register</button>
            </form>
        </section>
    );
}