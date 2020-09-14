import client from '../utils/fetchUtil';
import {GET_METHOD, POST_METHOD} from './service.constants';

export const PRODUCT_CATEGORIES_URL = 'app/v1/productCategory';
const PRODUCT_DETAILS_URL = 'app/v1/productDetails';

export const getProductCategories = async () => {
    return await client(PRODUCT_CATEGORIES_URL, GET_METHOD);
};

export const addProduct = async (body) => {
    return await client(PRODUCT_DETAILS_URL, POST_METHOD, body);
};
