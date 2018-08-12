import { FETCH_POSTS } from "../actions/actions";
import { FETCH_POST } from "../actions/actions";

export const initialState = {
	items: []
};
export default function(state = initialState, action) {
	switch (action.type) {
		/*case FETCH_POST:
			console.log(action.payload);
			return {
				post: {
					item: "wtf",
					pic: initialState.pics[id]
				}
			};*/
		case FETCH_POSTS:
			return {
				items: action.payload
			};

		default:
			return state;
	}
}
