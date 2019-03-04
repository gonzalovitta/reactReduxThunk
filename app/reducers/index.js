import { ADD_ARTICLE, DATA_LOADED, FILTER_POST, ADD_POST, DEL_POST } from "../constants/action-types";
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
      remoteArticles: state.remoteArticles.concat(action.payload),
      showedArticles: state.remoteArticles.concat(action.payload)
    });
  }

  if (action.type === FILTER_POST) {
    return Object.assign({}, state, {
      searchText: action.searchText.searchText,
      showedArticles: state.remoteArticles.filter( (item) => item.name.includes(action.searchText.searchText))
    });
  }

  if (action.type === ADD_POST) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload),
      showedArticles: state.remoteArticles.concat(action.payload)
    });
  }

  if (action.type === DEL_POST) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.filter((item) => item.id !== action.payload.id),
      showedArticles: state.remoteArticles.filter((item) => item.id !== action.payload.id)
    });
  }
  return state;
}

export default rootReducer;