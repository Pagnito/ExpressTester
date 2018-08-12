import axios from "axios";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_PICS = "FETCH_PICS";
export const FETCH_POST = "FETCH_POST";
export const FETCH_USER = "FETCH_USER";
export const fetchUser = () => {
	return function(dispatch) {
		axios.get("/api/current_user").then((res) => dispatch({ type: FETCH_USER, payload: res.data }));
	};
};

export function fetchPosts() {
	return function(dispatch) {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts`)
			.then((response) => {
				dispatch({
					type: FETCH_POSTS,
					payload: response.data
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
}
export function fetchPost(id) {
	return function(dispatch) {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => {
				dispatch({
					type: FETCH_POST,
					payload: {
						data: response.data,
						num: Number(id) - 1
					}
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
}
