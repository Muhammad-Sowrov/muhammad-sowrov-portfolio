import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home/Home";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
               path: "/",
               element: <Home></Home> 
            }
        ]
    }
])
export default Route;