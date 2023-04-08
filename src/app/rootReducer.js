import { combineReducers } from "redux";
import counterReducer from "../features/counter/counterSlice";
import postSlice from "../features/posts/postSlice";

const rootReducer = combineReducers({
    counter: counterReducer,
    post: postSlice,
});

export default rootReducer;
