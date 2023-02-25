import { combineReducers } from "redux";
import repositoryReducer from "./repositoriesReducer";

const reducers = combineReducers({
    repositories: repositoryReducer,
});

export default reducers;
