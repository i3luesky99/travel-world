import { createStore, combineReducers } from "redux";
 
const rootReducer = combineReducers({
  // loading: loadingReducer,
});

const store = createStore(rootReducer);

export default store;
