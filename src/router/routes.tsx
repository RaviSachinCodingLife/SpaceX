import App from "../App";
import Login from "../components/Auth/Login";
import LaunchDetail from "../components/launches/launchDetails";
import LaunchList from "../components/launches/launchList";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import HomeDetail from "../pages/Home/HomeDetail";
import Navbar from "../components/Navbar/NavBar";
import Shop from "../pages/shop/Shop";
import ProductDetail from "../pages/shop/ProductDetail";
import Cart from "../pages/shop/Cart";

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
                element:
                    <Navbar />,
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
                                <HomeDetail />
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
                    {
                        path: "/shop",
                        element: (
                            <PrivateRoute>
                                <Shop />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "/cart",
                        element: (
                            <PrivateRoute>
                                <Cart />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "/product/:slug",
                        element: (
                            <PrivateRoute>
                                <ProductDetail />
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
