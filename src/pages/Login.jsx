import React, {useContext} from 'react';

import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const  login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Page for login</h1>
            <form onSubmit={login}>
                <input type="text" placeholder="Enter login"/>
                <input type="password" placeholder="Enter password"/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;