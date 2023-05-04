import { createStore, combineReducers } from "redux";
import loadingReducer from "./Loading/loadingReducer";
const rootReducer = combineReducers({
  loading: loadingReducer,
});

const store = createStore(rootReducer);

export default store;
