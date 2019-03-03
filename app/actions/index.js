// src/js/actions/index.js
import { ADD_ARTICLE, DATA_LOADED, FILTER_POST } from "../constants/action-types";
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