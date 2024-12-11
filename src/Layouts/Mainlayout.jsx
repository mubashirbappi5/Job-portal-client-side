import { Outlet } from "react-router-dom";
import Navber from "../Sharedfile/Navber";


const Mainlayout = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            
        </div>
    );
};

export default Mainlayout;