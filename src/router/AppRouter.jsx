import React, {useContext} from 'react';
import MyBackdrop from "../components/MyBackdrop";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {AuthContext} from "../context";
import {privateRoutes, publicRoutes} from "./index";
import Main from "../pages/Main";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading) {
        return <MyBackdrop/>
    }
    return (
        <BrowserRouter>
            <Switch>
                {/*{isAuth === true && privateRoutes.map(({path, Component}) =>*/}
                {/*    <Route key={path} path={path} component={Component} exact/>*/}
                {/*)}*/}
                {/*{publicRoutes.map(({path, Component}) =>*/}
                {/*    <Route key={path} path={path} component={Component} exact/>*/}
                {/*)}*/}
                <Route path="/"  exact><Main/></Route>

            </Switch>
        </BrowserRouter>

        // isAuth
        //     ?
        //     <Switch>
        //         {privateRoutes.map(route =>
        //             <Route
        //                 component={route.component}
        //                 path={route.path}
        //                 exact={route.exact}
        //                 key={route.path}
        //             />
        //         )}
        //         <Redirect to="/"/>
        //     </Switch>
        //     :
        //     <Switch>
        //         {publicRoutes.map(route =>
        //             <Route
        //                 component={route.component}
        //                 path={route.path}
        //                 exact={route.exact}
        //                 key={route.path}
        //             />
        //         )}
        //         <Redirect to="/login"/>
        //     </Switch>
    );
};
export default AppRouter;