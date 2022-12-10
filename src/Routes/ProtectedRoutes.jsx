import { Outlet, Navigate } from "react-router";
import { isUserLoggedIn } from "../functions/authUser";

const ProtectedRoutes = () => {
    const isAuthorized = isUserLoggedIn();
    return isAuthorized ? <Outlet /> : <Navigate to="/unauthorized" />;
}

export default ProtectedRoutes;
