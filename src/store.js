import { createStore, combineReducers } from "redux";
import homePage from './pages/Homepage/reducer';
import userPage from './pages/User/reducer';

const reducers = combineReducers({
  homePage,
  userPage
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
