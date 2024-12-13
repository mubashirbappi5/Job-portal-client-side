import { Outlet } from "react-router-dom";
import Navber from "../Sharedfile/Navber";
import Footer from "../Sharedfile/Footer";


const Mainlayout = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Mainlayout;