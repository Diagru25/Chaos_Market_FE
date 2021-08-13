import { lazy } from "react";
import { clientPaths, adminPaths } from "./routes.constant";

export const ClientRoutes = [
    {
        path: clientPaths.PRODUCT_DETAIL + '/:productId',
        exact: true,
        requireLogin: false,
        component: lazy(() => import('../pages/product_page/product_detail/ProductDetail'))
    },
    {
        path: clientPaths.PRODUCT_LIST_CATEGORY,
        exact: true,
        requireLogin: false,
        component: lazy(() => import('../pages/product_page/product_list/ProductListCategory'))
    },
    {
        path: clientPaths.PRODUCT_LIST_BRAND,
        exact: true,
        requireLogin: false,
        component: lazy(() => import('../pages/product_page/product_list/ProductListBrand'))
    },
    {
        path: clientPaths.PRODUCT_LIST_SEARCH,
        exact: true,
        requireLogin: false,
        component: lazy(() => import('../pages/product_page/product_list/ProductListSearch'))
    },
    {
        path: clientPaths.HOME,
        exact: true,
        requireLogin: false,
        component: lazy(() => import('../pages/home_page/HomePage'))
    }

]

export const AdminRoutes = [

]


