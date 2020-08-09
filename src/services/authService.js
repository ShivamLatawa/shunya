import client from "../utils/fetchUtil";


const POST_METHOD = 'POST';
const SIGN_UP_URL = 'app/v1/users/sign-up';
const LOGIN_URL = 'login';


export const signUp = async (body) => {
    return await client(SIGN_UP_URL, POST_METHOD, body);
};

export const login = async (body) => {
    return await client(LOGIN_URL, POST_METHOD, body);
};