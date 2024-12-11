import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../pages/Home";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement:<h1>route not found</h1>,
      children:[{
        path:"/",
        element:<Home/>

      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
    },
  ]);
export default router;