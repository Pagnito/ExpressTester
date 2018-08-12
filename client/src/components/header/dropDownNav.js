import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/header.css";
import { Link } from "react-router-dom";
import SearchBar from "./search-bar";
import "../../styles/navDropDown.css";
class DropDownNav extends Component {
	render() {
		return (
			<div id="dropDownNav">
				<div id="dropBtnWrap">
					<button className="dropNavBtn">
						<Link to="/">Home</Link>
					</button>
					<button className="dropNavBtn">
						<Link to="/profile">Profile</Link>
					</button>
					<button className="dropNavBtn">
						<Link to="/">About</Link>
					</button>
				</div>
				<div id="dropProfileLinks">
					<img id="dropAvatar" src={this.props.user.image.url} />

					<i className="far fa-bell white dropBell" />
					<div id="dropSearchBar">
						<form id="dropInputIn">
							<i className="fas sIcon fa-search" />
							<input id="dropInput" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		user: state.users
	};
}
export default connect(mapStateToProps)(DropDownNav);
