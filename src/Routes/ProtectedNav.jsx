import { Outlet } from "react-router-dom";

const userAuth = () => {
    return true;
}

const ProtectedRoutes = () => {
    isAuthorized = userAuth();
    return isAuthorized ? <Outlet /> : <Navigate to="/unauthorized" />;
}
