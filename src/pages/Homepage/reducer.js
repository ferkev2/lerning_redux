import { ActionTypes } from './constants';

const defaultState = {
  users : [],
};

const homePageReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload
      }
    case ActionTypes.DEL_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }
    default:
      return state
  }
};

export default homePageReducer;
