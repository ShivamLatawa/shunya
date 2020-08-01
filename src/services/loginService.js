import client from "../utils/fetchUtil";


const SIGN_UP_URL = 'app/v1/users/sign-up';

export const signUp = async (body) => {
    return await client(SIGN_UP_URL, 'POST', body);
};
