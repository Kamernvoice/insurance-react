import About from "../pages/About";
import Login from "../pages/Login";
import Main from "../pages/Main";

// export const privateRoutes = [
//     {path: '/', component: Main, exact: true},
//     {path: '/about', component: About, exact: true},
//     {path: '/login', component: Login, exact: true}
// ]
//
// export const publicRoutes = [
//     {path: '/', component: Main, exact: true},
//     {path: '/login', component: Login, exact: true}
// ]

export const privateRoutes = [
    {path: '/about', Component: About}
]

export const publicRoutes = [
    {path: '/', Component: Main},
    {path: '/login', Component: Login}
]

