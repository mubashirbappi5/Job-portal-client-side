import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Signin from "../pages/Signin";
import JobsDetails from './../pages/JobsDetails';
import Privateroute from "./Privateroute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";
import AddJobs from "../pages/AddJobs";
import MyPostsjob from "../pages/MyPostsjob";


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
      },
      {
        path:"/signin",
        element:<Signin/>
      },
      {
        path:"jobs/:id",
        element:<Privateroute><JobsDetails/></Privateroute>,
        loader:({params})=>fetch(`https://job-portal-server-seven-bice.vercel.app/jobs/${params.id}`)
      },
      {
        path:"/applyjob/:id",
        element:<Privateroute><JobApply></JobApply></Privateroute>
      },
      {
        path:'/myapplication',
        element:<Privateroute><MyApplications/></Privateroute>,
       
      },
      {
        path:'/addjob',
        element:<AddJobs/>
      },
      {
        path:'/myjobs',
        element:<MyPostsjob/>
      }

    ]
    },
  ]);
export default router;