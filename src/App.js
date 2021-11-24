import * as React from 'react';

import {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AuthContext, DrawerContext} from "./context";
import AppRouter from "./router/AppRouter";
import MyDrawer from "./components/MyDrawer";
import MyAppBar from "./components/MyAppBar";
import MyAccountMenu from "./components/MyAccountMenu";
import Main from "./pages/Main";

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
                <AppRouter/>
                {/*<BrowserRouter>*/}

                {/*    <Switch>*/}
                {/*        <Route path="/" component={Main}/>*/}
                {/*    </Switch>*/}
                {/*</BrowserRouter>*/}
            </AuthContext.Provider>
            <MyAccountMenu/>
        </div>

    )
}

export default App;
