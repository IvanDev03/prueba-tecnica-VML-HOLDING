import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const isAuthenticated = !!localStorage.getItem('token'); 

    console.log('isAuthenticated:', isAuthenticated);
  
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;

