import { combineReducers } from "redux";
import popular from "./popular";
import repositories from "./repositories";

export default combineReducers({
    popular,
    repositories
});
