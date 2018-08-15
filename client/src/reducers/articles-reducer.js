import { FETCH_ARTICLES } from "../actions/actions";

export const initialState = {
	items: []
};
export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_ARTICLES:
			return {
				items: action.payload
			};

		default:
			return state;
	}
}
