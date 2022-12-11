import { userLogout } from '../functions/authUser';
import { Navigate } from 'react-router-dom';

export function Logout() {
  userLogout();
  return <Navigate to='/' />;
}
