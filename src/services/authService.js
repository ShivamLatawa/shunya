import client from '../utils/fetchUtil';
import {POST_METHOD, GET_METHOD} from './service.constants';

const SIGN_UP_URL = 'app/v1/users/sign-up';
const LOGIN_URL = 'login';
const USERS_URL = 'app/v1/users/user-info';

export const signUp = async (body) => {
    return await client(SIGN_UP_URL, POST_METHOD, body);
};

export const login = async (body) => {
    return await client(LOGIN_URL, POST_METHOD, body);
};

export const isAuthenticated = async () => {
    return await client(USERS_URL, GET_METHOD);
};
