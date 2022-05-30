import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import './styles.css';

export default function SignUp() {
    const [user, setUser] = useState(
        [{
            username: 'admin',
            password: 'admin'
        }
        ]
    );
    return (
        <div className='signup-container'>
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    setUser(user => {
                        const newUser = [...user, values]
                        const jsonValue = JSON.stringify(newUser)
                        localStorage.setItem('userdatas', jsonValue);
                        return newUser
                    })
                    alert("signup success, you can signin now!");
                }}

                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required("Required")
                        .matches(/^[a-z0-9]+$/, "Can't have special case character or uppercase")
                        .min(3, "Password is too short - should be 8 chars minimum.")
                        .max(15, "Password is too long - should be 15 chars maximum."),
                    password: Yup.string()
                        .required("No password provided.")
                        .min(3, "Password is too short - should be 8 chars minimum.")
                        .max(15, "Password is too short - should be 8 chars maximum.")
                        .matches(/^(?=.*\d)/, "Password must contain a number.")
                        .matches(
                            /^[a-z0-9]+$/,
                            "Password can't have special case character or uppercase"
                        )
                })}
            >
                {(props) => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;
                    return (
                        <form onSubmit={handleSubmit} className="form-signup">
                            <label htmlFor="username">User Name</label>
                            <input
                                name="username"
                                type="text"
                                placeholder="Enter your user name"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.username && touched.username && "error"}
                            />
                            {errors.username && touched.username && (
                                <div className="input-feedback">{errors.username}</div>
                            )}
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.password && touched.password && "error"}
                            />
                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                            )}
                            <button type="submit" disabled={isSubmitting}>
                                Sign Up
                            </button>
                        </form>
                    );
                }}
            </Formik>
        </div >)
}
