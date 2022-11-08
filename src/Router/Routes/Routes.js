import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Checkout from "../../pages/Checkout/Checkout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Home/Services/Services";
import Login from "../../pages/Login/Login";
import Orders from "../../pages/Orders/Orders";
import SignUp from "../../pages/SignUp/SignUp";

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
                
              },
              {
                path: '/orders',
                element: <Orders></Orders>
              },

              {
                path: '/services',
                element: <Services></Services>
              },

              {
                path:'*', element:<ErrorPage></ErrorPage>
              }
        ]
    }
])

export default router;