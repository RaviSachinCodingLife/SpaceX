import App from "../App";
import Login from "../components/Auth/Login";
import LaunchDetail from "../components/launches/launchDetails";
import LaunchList from "../components/launches/launchList";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Navbar from "../components/Navbar/NavBar";

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
                element: <Navbar />,
                children: [
                    {
                        path: "/home",
                        element: (
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "/home/:id",
                        element: (
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        ),
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
                ],
            },
            {
                path: "*",
                element: <div>404 Not Found</div>,
            },
        ],
    },
];

export { routes };
