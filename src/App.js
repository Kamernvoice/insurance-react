import * as React from 'react';

import {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AuthContext, DrawerContext} from "./context";
import AppRouter from "./router/AppRouter";
import MyBackdrop from "./components/MyBackdrop";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])

    return (
        <div>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
                isLoading
            }}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
                {isLoading && <MyBackdrop/>}
            </AuthContext.Provider>
        </div>

    )
}

export default App;
