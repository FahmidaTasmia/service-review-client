import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutPage from "../../pages/AboutPage/AboutPage";
import AllServices from "../../pages/AllServices/AllServices";
import Blog from "../../pages/Blog/Blog";
import Checkout from "../../pages/Checkout/Checkout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Home/Services/Services";
import Login from "../../pages/Login/Login";
import Orders from "../../pages/Orders/Orders";
import Review from "../../pages/Review/Review";
import ShowReviews from "../../pages/Review/ShowReviews";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                loader:({params})=>fetch(`https://idot-server.vercel.app/services/${params.id}`)
              },
              {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
              },

              {
                path: '/allServices',
                element:<AllServices></AllServices>,
              
              },

              {
                path: '/reviews:id',
                element:<Review></Review>,
              
              },

              

              {
                path: '/allServices',
                element: <PrivateRoute><AllServices></AllServices></PrivateRoute>
               
              },

              {
                path:'/blog',
                element:<Blog></Blog>
              },

              {
                path:'/about',
                element:<AboutPage></AboutPage>
              },

             
        ]
    }
])

export default router;