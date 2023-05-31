import { createStore,   } from "redux";
import tourReducer from "./Tours/loadingReducer";

const store = createStore(tourReducer);

export default store;
