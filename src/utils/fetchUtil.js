// local development
const API_BASE_URL = 'http://192.168.1.3:8080';

// production
// const API_BASE_URL = "<domain:port>";

export const client = async (url, method, body) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${url}`, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const error = await response.json();
            return Promise.reject({error: error.code});
        }

        // since the url for login doesn't return any response json
        // this check needs to be there for separate handling of login
        if (response.url.includes('login')) {
            return Promise.resolve(response);
        }

        return await response.json();
    } catch (error) {
        console.error('something went wrong', error);
        return Promise.reject({error: error.code});
    }
};

export default client;
