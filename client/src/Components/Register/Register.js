import styles from './Register.module.css'

import * as authService from '../../service/authService.js';
import * as cloudinary from '../../service/cloudinary.js';

import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

export const Register = () => {

    /* TODO: validation hook for errors, so it can be re-usable to edit page */
    /*TODO:// UX WAY TO POP UP ERRORS */
    /*TODO:// Add checked/error icon in input */
    /*TODO:// More universal way to check for errors */
    const [userImageUrl, setImageUserUrl] = useState();
    const [validateInput, setValidateInput] = useState(true);
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        'full-name': '',
        'username': '',
        'email': '',
        'password': '',
        'confirm-password': '',
    });

    const { userLogin } = useContext(AuthContext);

    let check = Object.values(errors).some(e => Boolean(e));

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const userData = Object.fromEntries(new FormData(e.target));

        const confirmedPassword = userData['confirm-password'];
        const password = userData.password;

        if (confirmedPassword != password || Object.values(userData).some(i => i == '')) {
            setValidateInput(false);
            return
        }

        userData.imageUrl = userImageUrl;
        authService.register(userData).
            then(result => 
                userLogin(result)
            )
    }

    const onChangeHandler = (e) => {
        setValidateInput(true);
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const minLengthCheck = (e, bound) => {

        if (values[e.target.name].length < bound) {
            e.target.className = styles['red-style'];
        } else {
            e.target.className = styles['green-style'];
        }

        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < bound
        }))
    }

    const emailValidation = (e) => {

        const regex = new RegExp(/^[A-Za-z0-9+_.-]+@(.+)$/);
        const urlInput = e.target.value;

        if (!regex.test(urlInput)) {
            e.target.className = styles['red-style'];
        } else {
            e.target.className = styles['green-style'];
        }

        setErrors(state => ({
            ...state,
            [e.target.name]: !regex.test(urlInput)
        }))
    }

    // const validImageUrl = (e) => {
    //     const regex = new RegExp(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i);
    //     const urlInput = e.target.value;

    //     if (!regex.test(urlInput)) {
    //         e.target.className = styles['red-style'];
    //     } else {
    //         e.target.className = styles['green-style'];
    //     }

    //     setErrors(state => ({
    //         ...state,
    //         [e.target.name]: !regex.test(urlInput)
    //     }))
    // }


    const submitImage = (e) => {
        cloudinary
            .uploadCloudinary(e.target.files[0])
            .then(result => setImageUserUrl(result.url));
    }
    return (
        <section className={styles["register-section"]}>
            <h1 className={styles["title"]}>Registration</h1>
            <form
                className={styles["register-form"]}
                onSubmit={onSubmitHandler}>
                <div className={styles["user-details"]}>
                    <div className={styles["profile-pic"]}>
                        <img src={userImageUrl ? userImageUrl : "https://res.cloudinary.com/yavorhr/image/upload/v1680870027/Cook%20at%20home/Users/Blank_profile_lexdev.jpg"} alt="" />
                        <input
                            type="file"
                            id="file"
                            className={styles["input-profile-pic"]}
                            onChange={(e) => submitImage(e)} />
                        <label htmlFor="file" className={styles["uploadBtn"]}>Choose photo</label>
                    </div>

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
                        {errors['full-name'] && <p className={`${styles["error"]} ${styles["full-name"]}`}>Must be at least 4 characters long!</p>}
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
                        {errors.username && <p className={`${styles["error"]} ${styles["username"]}`}>Must be at least 3 characters long!</p>}
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
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            placeholder="Confirm your password"
                            onChange={onChangeHandler}
                            value={values['confirm-password']} />
                    </div>
                    {/* <div className={styles["txt-fields"]}>
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
                    </div> */}
                </div>
                <button type="submit" disabled={check} className={styles["register-submit-btn"]}>Register</button>
                {!validateInput && <p className={`${styles["error"]} ${styles["imageUrl"]}`}>You have invalid password or blank fields!</p>}
            </form>
        </section>
    );
}