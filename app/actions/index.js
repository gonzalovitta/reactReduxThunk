// src/js/actions/index.js
import { ADD_ARTICLE, DATA_LOADED, FILTER_POST, ADD_POST, DEL_POST } from "../constants/action-types";
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch("http://localhost:3000/posts")
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
  return function(dispatch) {
    return fetch("http://localhost:3000/posts", {
        method: 'POST', 
        body: JSON.stringify(newPost), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
      .then(json => {
        dispatch({ type: ADD_POST, payload: json });
      });
  };
}

export function delPost(post){
  return function(dispatch) {
    const url = "http://localhost:3000/posts/"+post
    return fetch(url, {
        method: 'DELETE'
      }).then(response => response.json())
      .then(json => {
        dispatch({ type: DEL_POST, payload: json });
      });
  };
}