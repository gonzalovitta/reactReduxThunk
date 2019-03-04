import { ADD_ARTICLE, DATA_LOADED, FILTER_POST, ADD_POST } from "../constants/action-types";
import uuidv1 from "uuid";
const initialState = {
  articles: [{id:1, title:"Hello World"},{id:2, title:"Hello World2"}],
  remoteArticles: [],
  searchText: "",
  showedArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload).slice(0, 8),
      showedArticles: state.remoteArticles.concat(action.payload).slice(0,8)
    });
  }

  if (action.type === FILTER_POST) {
    console.log(action.searchText);
    return Object.assign({}, state, {
      searchText: action.searchText.searchText,
      showedArticles: state.remoteArticles.filter( (item) => item.title.includes(action.searchText.searchText))
    });
  }

  if (action.type === ADD_POST) {
    console.log(Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat({id: uuidv1(), title:action.newPost.desc}),
      // showedArticles: state.remoteArticles.filter( (item) => item.title.includes(state.searchText))
      showedArticles: state.remoteArticles.concat({id: uuidv1(), title:action.newPost.desc})
    }));
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat({id: uuidv1(), title:action.newPost.desc}),
      // showedArticles: state.remoteArticles.filter( (item) => item.title.includes(state.searchText))
      showedArticles: state.remoteArticles.concat({id: uuidv1(), title:action.newPost.desc})
    });
  }
  return state;
}

export default rootReducer;