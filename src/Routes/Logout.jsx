import { userLogout } from "../functions/authUser";
import { Navigate } from "react-router-dom";

const Logout = () =>{
    userLogout();
    return <Navigate to="/" />;
}

export default Logout;