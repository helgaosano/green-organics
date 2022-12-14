import React, { useState } from "react";
import "../Login.css"

export const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                {/* <button type="submit"><b>Login</b></button> */}
                <button className="btn btn-outline-success btn-md m-2" >
                    <a href='http://localhost:3000/login'>login</a>
                </button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>Don't have an account? Sign up here.</button>
        </div>
    )
}

export default LoginForm