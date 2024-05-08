import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../useAuth';

export default function AuthRoute({ children }) {
  const location = useLocation();
  const { user } = useAuth();
  return user ? (
    children
  ) : (
    <Navigate to={`/login?returnUrl=${location.pathname}`} replace />
  );
}
