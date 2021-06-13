import client from '../utils/fetchUtil';
import {GET_METHOD, POST_METHOD} from './service.constants';

export const PRODUCT_CATEGORIES_URL = 'app/v1/orderCategory';
export const ORDER_DETAILS_URL = 'app/v1/orders';

export const getOrderCategories = async () => {
    return await client(PRODUCT_CATEGORIES_URL, GET_METHOD);
};

export const getOrderDetails = async () => {
    return await client(ORDER_DETAILS_URL, GET_METHOD);
};

export const getOrderDetailsForFarmer = async (id) => {
    return await client(`${ORDER_DETAILS_URL}/farmer?id=${id}`, GET_METHOD);
};

export const getOrderDetailsForVendor = async (id) => {
    return await client(`${ORDER_DETAILS_URL}/vendor?id=${id}`, GET_METHOD);
};

export const addOrder = async (body) => {
    return await client(ORDER_DETAILS_URL, POST_METHOD, body);
};

export const addProductCategory = async (body) => {
    return await client(PRODUCT_CATEGORIES_URL, POST_METHOD, body);
};
