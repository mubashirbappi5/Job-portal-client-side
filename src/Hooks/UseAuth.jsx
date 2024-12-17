import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext/AuthProvider";

const UseAuth = () => {
    const context = useContext(Authcontext)
    return context
  
};

export default UseAuth;