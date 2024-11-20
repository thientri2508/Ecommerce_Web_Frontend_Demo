import { FC } from 'react';
import { ROUTES } from './constants/constants.router';
import Home from '../pages/Home/Home';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Category from '../pages/Category/Category';
import Product from '../pages/Product/Product';

interface RouteType {
    path: string;
    element: FC;
    index?: boolean;
}

export const routes: RouteType[] = [
    {
        path: ROUTES.HOME,
        element: Home,
        index: true,
    },
    {
        path: ROUTES.PRODUCTS,
        element: Product,
    },
    {
        path: ROUTES.PRODUCT_DETAIL,
        element: ProductDetail,
    },
    {
        path: ROUTES.CATEGORIES,
        element: Category,
    },
];