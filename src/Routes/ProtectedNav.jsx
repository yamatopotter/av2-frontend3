import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export function userAuth() {
  return true;
}

export function ProtectedRoutes() {
  const isAuthorized = userAuth();
  return isAuthorized ? <Outlet /> : <Navigate to='/unauthorized' />;
}
