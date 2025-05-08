import App from "../App";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import HomeDetail from "../pages/Home/HomeDetail";
import Navbar from "../components/Navbar/NavBar";
import Shop from "../pages/shop/Shop";
import ProductDetail from "../pages/shop/ProductDetail";
import Checkout from "../pages/shop/Checkout";
import Starlink from "../pages/Starlink/Starlink";
import Astronaut from "../pages/Astronaut/Astronaut";
import AstronautDetails from "../pages/Astronaut/AstronautDetails";
import { Contact } from "../pages/Contact/Contact";
import Careers from "../pages/Careers/Careers";
import NotFound from "../components/NotFound/NotFound";
import LaunchDetail from "../pages/Launches/launchDetails";
import LaunchList from "../pages/Launches/launchList";

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
                                <Checkout />
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
                    {
                        path: "/starlink",
                        element: (
                            <PrivateRoute>
                                <Starlink />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "/astronaut",
                        element: (
                            <PrivateRoute>
                                <Astronaut />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "/astronaut/:id",
                        element: (
                            <PrivateRoute>
                                <AstronautDetails />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "/contact",
                        element: (
                            <PrivateRoute>
                                <Contact />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "/careers",
                        element: (
                            <PrivateRoute>
                                <Careers />
                            </PrivateRoute>
                        ),
                    },
                ],
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
];

export { routes };
