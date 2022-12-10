import { Outlet, Navigate } from "react-router";

const userAuth = () => {
    return true;
}

const ProtectedRoutes = () => {
    const isAuthorized = userAuth();
    return isAuthorized ? <Outlet /> : <Navigate to="/unauthorized" />;
}

export default ProtectedRoutes;
