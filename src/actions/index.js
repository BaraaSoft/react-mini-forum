import axios from 'axios'

const BASE_URL = 'http://reduxblog.herokuapp.com';
const API_KEY = 'PAPERCLIP1234';
const CREATE_POSTS = 'CREATE_POSTS';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';

export function fetchPosts() {
    let url = `${BASE_URL}/api/posts`
    const request = axios.get(url, {
        params: {
            key: API_KEY
        }
    });
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(post, callback) {
    let url = `${BASE_URL}/api/posts`
    const request = axios.post(url, post, {
        params: {
            key: API_KEY
        }
    }).then((data) => {
        callback(request);
    })

    return {
        type: CREATE_POSTS,
        payload: request
    }

}

export function fetchSinglePost(id) {
    let url = `${BASE_URL}/api/posts/${id}`
    const request = axios.get(url, {
        params: {
            key: API_KEY
        }
    });
    return {
        type: FETCH_SINGLE_POST,
        payload: request
    }
}


