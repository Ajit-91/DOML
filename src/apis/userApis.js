import fetchApi from "../utils/fetchApi";

export const fetchUsers = async () => {
    const url = 'https://dummyjson.com/users';
    return await fetchApi(url, { method: 'GET' })
}