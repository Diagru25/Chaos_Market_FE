import { lazy } from "react";
import { clientPaths, adminPaths } from "./routes.constant";

export const ClientRoutes = [
    {
        path: clientPaths.PRODUCT_DETAIL + '/:productId',
        exact: true,
        requireLogin: false,
        component: lazy(() => import('../pages/product_page/product_detail/ProductDetail'))
    },
    // {
    //     path: clientPaths.CATEGORIES,
    //     exact: true,
    //     requireLogin: false,
    //     component: lazy(() => import('@src/pages/product_page/ProductDetail'))
    // },
    {
        path: clientPaths.HOME,
        exact: true,
        requireLogin: false,
        component: lazy(() => import('../pages/home_page/HomePage'))
    }
]

export const AdminRoutes = [

]


