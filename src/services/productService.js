import client from '../utils/fetchUtil';
import {GET_METHOD} from './service.constants';

const PRODUCT_CATEGORIES_URL = 'app/v1/productCategory';

export const getProductCategories = async (params) => {
    return await client(PRODUCT_CATEGORIES_URL, GET_METHOD, params);
};
