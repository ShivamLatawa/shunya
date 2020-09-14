import client from '../utils/fetchUtil';
import {getProductCategories, PRODUCT_CATEGORIES_URL} from './productService';
import {POST_METHOD, GET_METHOD} from './service.constants';

const SIGN_UP_URL = 'app/v1/users/sign-up';
const LOGIN_URL = 'login';

export const signUp = async (body) => {
    return await client(SIGN_UP_URL, POST_METHOD, body);
};

export const login = async (body) => {
    return await client(LOGIN_URL, POST_METHOD, body);
};

export const isAuthenticated = async () => {
    return await client(PRODUCT_CATEGORIES_URL, GET_METHOD);
};
