import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }: { children: JSX.Element }) => {
    const userData = localStorage.getItem('user_data');
    const token = userData ? JSON.parse(userData).token : null;

    return token ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
