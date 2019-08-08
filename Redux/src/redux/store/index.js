import { createStore } from "redux";
import rootReducer from "../reudcer";

const store = createStore(rootReducer);

export default store;
