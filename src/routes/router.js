import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductCategories from "../pages/ProductCategories";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/home',
                element: <Home/>
            },
            {
                path:'/blogs',
                element: <Blogs/>
            },
            {
                path:'/category/:categoryName',
                element: <ProductCategories/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/sign-up',
                element: <SignUp/>
            },
        ]
    }
])

export default router;