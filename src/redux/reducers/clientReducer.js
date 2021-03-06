import { combineReducers } from 'redux';

const selectedClientMedia = (state = [], action) => {
  switch (action.type) {
    case 'SET_SELECTED_CLIENT_MEDIA':
      return action.payload
    default:
      return state;
  }
};

const selectSingleClient = (state = {}, action) => {

  switch (action.type) {
    case 'SET_SINGLE_CLIENT':
      return action.payload
    default:
      return state;
  }
}
const comment = (state = '', action) => {
  switch (action.type) {
    case 'SET_COMMENT':
      return action.payload
    case 'SET_SINGLE_CLIENT':
      return action.payload.comment
    default:
      return state;
  }
};




export default combineReducers({
  selectedClientMedia,
  selectSingleClient,
  comment,
  selectedClientMedia
});