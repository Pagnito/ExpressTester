import { combineReducers } from "redux";
import PostReducer from "./post-reducer";
import PostsReducer from "./posts-reducer";
import UsersReducer from "./users-reducer";
const rootReducer = combineReducers({
	posts: PostsReducer,
	post: PostReducer,
	users: UsersReducer
});

export default rootReducer;
