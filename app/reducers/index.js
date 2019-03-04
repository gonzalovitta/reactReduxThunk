import { DATA_LOADED, FILTER_POST, ADD_POST, DEL_POST } from "../constants/action-types";
const initialState = {
  remotePosts: [],
  searchText: ""
};

function rootReducer(state = initialState, action) {
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remotePosts: state.remotePosts.concat(action.payload)
    });
  }

  if (action.type === FILTER_POST) {
    return Object.assign({}, state, {
      searchText: action.searchText.searchText
    });
  }

  if (action.type === ADD_POST) {
    return Object.assign({}, state, {
      remotePosts: state.remotePosts.concat(action.payload),
      searchText: ''
    });
  }

  if (action.type === DEL_POST) {
    return Object.assign({}, state, {
      remotePosts: state.remotePosts.filter((item) => item.id !== action.payload.id)
    });
  }
  return state;
}

export default rootReducer;