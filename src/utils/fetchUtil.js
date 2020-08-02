// local development
// const API_BASE_URL = "http://192.168.1.2:8080";

// production
const API_BASE_URL = "<domain:port>";


export const client = async (url, method, body) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${url}`, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const error = await response.json();
            return Promise.reject({error: error.code});
        }

        return await response.json();

    } catch (error) {
        console.error("something went wrong", error);
        return Promise.reject({error: error.code});
    }
};


export default client;
