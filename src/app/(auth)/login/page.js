"use client";

import "../style.css";
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from "next/link";

const Login = () => {
    const router = useRouter();
    
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Email is required')
            .email("Invalid email address"),

        password: Yup.string()
            .required('Password is required')
            .min(8, "Password must be at least 8 characters"),
    });


    const handleSubmit = (values) => {
        console.log('Form data', values);

        // If valid login, navigate to home page
        router.push("/home");   
    }
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {formik => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter email address"
                                />
                                <ErrorMessage name="email" component="span" className="error-message" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                                <ErrorMessage name="password" component="span" className="error-message" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>

                            <div className="additional-link">
                            <p>Don't have an account? <Link href="/register">Register</Link></p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Login;