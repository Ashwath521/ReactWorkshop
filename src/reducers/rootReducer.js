import { combineReducers } from "redux";
import { courseReducers as courses } from "./courseReducers";
const rootReducer = combineReducers({}, courses);

export default rootReducer;
