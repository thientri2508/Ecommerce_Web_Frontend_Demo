import { FC } from 'react';
import { ROUTES } from './constants/constants.router';
import Home from '../pages/Home/Home';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Category from '../pages/Category/Category';
import Product from '../pages/Product/Product';
import Store from '../pages/Store/Store';
import Cart from '../pages/Cart/Cart';

interface RouteType {
    path: string;
    element: FC;
    index?: boolean;
    isPrivate?: boolean;
  }
  
export const routes: RouteType[] = [
    {
        path: ROUTES.HOME,
        element: Home,
        index: true,
        isPrivate: false,
    },
    {
        path: ROUTES.PRODUCTS,
        element: Product,
        isPrivate: false,
    },
    {
        path: ROUTES.PRODUCT_DETAIL,
        element: ProductDetail,
        isPrivate: false,
    },
    {
        path: ROUTES.CATEGORIES,
        element: Category,
        isPrivate: false,
    },
    {
        path: ROUTES.STORE,
        element: Store,
        isPrivate: false,
    },
    {
        path: ROUTES.CART,
        element: Cart,
        isPrivate: false,
    },
];