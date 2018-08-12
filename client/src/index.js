import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";

import thunk from "redux-thunk";
import App from "./components/App";
const initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, applyMiddleware(...middleware));
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
