import { combineReducers } from "redux";
import weatherReducer from "./weatherRecucer/weatherReducer";

const rootReducer = combineReducers({ weather: weatherReducer });

export default rootReducer;
