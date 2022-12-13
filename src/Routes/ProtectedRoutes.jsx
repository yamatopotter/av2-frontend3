import { Outlet, Navigate } from 'react-router';
import { isUserLoggedIn } from '../functions/authUser';

export function ProtectedRoutes() {
  const isAuthorized = isUserLoggedIn();
  return isAuthorized ? <Outlet /> : <Navigate to='/unauthorized' />;
}
