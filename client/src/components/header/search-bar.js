import React, { Component } from "react";
import "../../styles/search-bar.css";
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ""
		};
	}
	render() {
		return (
			<div id="searchBar">
				<form>
					<input id="input" />
					<i className="fas sIcon fa-search" />
				</form>
			</div>
		);
	}
}
export default SearchBar;
