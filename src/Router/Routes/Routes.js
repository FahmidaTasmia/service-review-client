import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../pages/AllServices/AllServices";
import Blog from "../../pages/Blog/Blog";
import Checkout from "../../pages/Checkout/Checkout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Home/Services/Services";
import Login from "../../pages/Login/Login";
import Orders from "../../pages/Orders/Orders";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/login', 
                element: <Login></Login>
              },

              {
                path: '/signup', 
                element: <SignUp></SignUp>
              },

              {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
              },
              {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
              },

              {
                path: '/services',
                element: <Services></Services>,
              
              },

              {
                path: '/services',
                element: <AllServices></AllServices>,
                loader:()=>fetch('http://localhost:5000/services')
              },

              {
                path:'/blog',
                element:<Blog></Blog>
              },

              {
                path:'*', element:<ErrorPage></ErrorPage>
              }
        ]
    }
])

export default router;