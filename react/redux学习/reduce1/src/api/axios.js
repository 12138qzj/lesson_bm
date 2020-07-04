import {get } from 'axios';

function getPostRequest() {

}

export const getPostRequest = () => {
    // return Ajax("/Login_design", { username, password, type }, "POST");
    Promise = get("https://jsonplaceholder.typicode.com/posts", {});

    return get("https://jsonplaceholder.typicode.com/posts", {});

}