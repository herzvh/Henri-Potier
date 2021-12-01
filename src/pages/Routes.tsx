import { RouteObject } from "react-router";
import { MainLayout } from "../components/layout/MainLayout";
import { Home } from "./Home";
import { ShoppingCart } from "./ShoppingCart";

const Routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout>
            <Home/>
        </MainLayout>
    },
    {
        path: '/shopping-cart',
        element: <MainLayout>
            <ShoppingCart/>
        </MainLayout>
    }
]

export default Routes