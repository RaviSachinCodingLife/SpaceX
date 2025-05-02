import App from "../App";
import Login from "../components/Auth/Login";
import LaunchDetail from "../components/launches/launchDetails";
import LaunchList from "../components/launches/launchList";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                ),
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/launches",
                element: (
                    <PrivateRoute>
                        <LaunchList />
                    </PrivateRoute>
                ),
            },
            {
                path: "/launches/:id",
                element: (
                    <PrivateRoute>
                        <LaunchDetail />
                    </PrivateRoute>
                ),
            },
            {
                path: "*",
                element: <div>404 Not Found</div>,
            },
        ],
    },
];

export { routes };
