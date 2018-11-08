import axios from 'axios'

const BASE_URL = 'http://reduxblog.herokuapp.com';
const API_KEY = 'PAPERCLIP1234';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
    let url = `${BASE_URL}/api/posts`
    const request = axios.get(url, {
        params: {
            key: API_KEY
        }
    });
    return {
        type: 'FETCH_POSTS',
        payload: request
    }
}
