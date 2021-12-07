import About from "../pages/About";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";

export const privateRoutes = [
    {path: '/about', Component: About},
    {path: '/profile', Component: Profile}
]

export const publicRoutes = [
    {path: '/', Component: Main},
    {path: '/login', Component: Login},
    {path: '/signup', Component: Signup}
]

