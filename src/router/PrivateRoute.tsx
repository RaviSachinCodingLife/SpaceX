import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const userData = localStorage.getItem('user_data');
    const token = userData ? JSON.parse(userData).token : null;

    return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
