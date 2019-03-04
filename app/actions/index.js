// src/js/actions/index.js
import { ADD_ARTICLE, DATA_LOADED, FILTER_POST, ADD_POST } from "../constants/action-types";
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}

export function filterPosts(searchText){
  return {type: FILTER_POST, searchText};
}

export function addPost(newPost) {
  return { type: ADD_POST, newPost };
}