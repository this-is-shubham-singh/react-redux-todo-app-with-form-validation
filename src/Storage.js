import { createStore } from "redux";
import rootReducer from "./Reducers/Reducercollection";

const store = createStore(rootReducer);

export default store;
