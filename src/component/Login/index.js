import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';

export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = (e) => {
        const userInfo = { userName: 'admin', password: 'admin' }
        const userData = {
            name,
            password,
        };
        if (userData.name === userInfo.userName && userData.password === userInfo.password) {
            localStorage.setItem('token-login', JSON.stringify(true));
            navigate('/home')
            setName('');
            setPassword('');
        }
        else {
            alert('Incorrect username or password');
        }
    };

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Name" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Password" />
                </label>
                <div className='button'>
                    <button type="submit" onClick={login}>Submit</button>
                </div>
            </form>
        </div>
    )
}