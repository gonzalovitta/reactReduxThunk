import { ADD_ARTICLE, DATA_LOADED, FILTER_POST } from "../constants/action-types";
const initialState = {
  articles: [{id:1, title:"Hello World"},{id:2, title:"Hello World2"}],
  remoteArticles: [],
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
      remoteArticles: state.remoteArticles.concat(action.payload),
      showedArticles: state.remoteArticles.concat(action.payload)
    });
  }

  if (action.type === FILTER_POST) {
    console.log(action.searchText);
    return Object.assign({}, state, {
      showedArticles: state.remoteArticles.filter( (item) => item.title.startsWith(action.searchText.searchText))
    });
  }
  return state;
}

export default rootReducer;