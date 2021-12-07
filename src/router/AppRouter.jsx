import React, {useContext} from 'react';
import MyBackdrop from "../components/MyBackdrop";
import {BrowserRouter, Redirect, Route, Switch, useHistory} from "react-router-dom";
import {AuthContext} from "../context";
import {privateRoutes, publicRoutes} from "./index";
import Main from "../pages/Main";


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    const router = useHistory();

    return (
    <Switch>
        {isAuth === true && privateRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
        )}
        {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
        )}
        <Redirect to='/login'/>
    </Switch>
    );
};
export default AppRouter;