import client from "../utils/fetchUtil";

const POST_METHOD = 'POST';

const SIGN_UP_URL = 'app/v1/users/sign-up';


export const signUp = async (body) => {
    return await client(SIGN_UP_URL, POST_METHOD, body);
};
