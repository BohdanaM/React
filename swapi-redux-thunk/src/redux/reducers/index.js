import { combineReducers } from "redux";
import starWarsReducer from "./starWarsReducer";

const rootReducer = combineReducers({
  starWars: starWarsReducer,
});

export default rootReducer;
