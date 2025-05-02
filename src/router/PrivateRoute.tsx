// import { Navigate } from 'react-router-dom';
// import { useAuthStore } from '../store/authStore';
// import { useSignUpStore } from '../store/signUpStore';

// const PrivateRoute = ({ children }: { children: JSX.Element }) => {
//     const isLoginAuthenticated = useAuthStore((state) => state.isAuthenticated);
//     const isSignupAuthenticated = useSignUpStore((state) => state.isAuthenticated);
//     return isLoginAuthenticated || isSignupAuthenticated ? children : <Navigate to="/" />;
// };

// export default PrivateRoute;



import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const userData = localStorage.getItem('user_data');
    const token = userData ? JSON.parse(userData).token : null;

    return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
