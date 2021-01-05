import client from '../utils/fetchUtil';
import {GET_METHOD, POST_METHOD} from './service.constants';

export const PRODUCT_CATEGORIES_URL = 'app/v1/orderCategory';
export const PRODUCT_DETAILS_URL = 'app/v1/orderDetails';

export const getOrderCategories = async () => {
    return await client(PRODUCT_CATEGORIES_URL, GET_METHOD);
};

export const getOrderDetails = async () => {
    return await client(PRODUCT_DETAILS_URL, GET_METHOD);
};

export const getOrderDetailsForFarmer = async (id) => {
    return await client(`${PRODUCT_DETAILS_URL}/farmer?id=${id}`, GET_METHOD);
};

export const addOrder = async (body) => {
    return await client(PRODUCT_DETAILS_URL, POST_METHOD, body);
};

export const addProductCategory = async (body) => {
    return await client(PRODUCT_CATEGORIES_URL, POST_METHOD, body);
};
