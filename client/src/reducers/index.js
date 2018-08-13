import { combineReducers } from "redux";
import PostReducer from "./post-reducer";
import PostsReducer from "./posts-reducer";
import UsersReducer from "./users-reducer";
import { reducer as reduxForm } from "redux-form";
const rootReducer = combineReducers({
	posts: PostsReducer,
	post: PostReducer,
	users: UsersReducer,
	form: reduxForm
});

export default rootReducer;
