import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home/Home";
import Error from "../Pages/Error";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
               path: "/",
               element: <Home></Home> 
            }
        ]
    }
])
export default Route;