import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/header.css";
import { Link } from "react-router-dom";
import SearchBar from "./search-bar";
import "../../styles/navDropDown.css";
class DropDownNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropDownAnimate: "animeDropDown"
		};
	}
	slideUpNav = () => {
		this.setState({ dropDownAnimate: "animeDropUp" });
	};
	render() {
		if (!this.props.user) {
			return (
				<div className={this.state.dropDownAnimate} id="dropDownNav">
					<div id="dropBtnWrap">
						<button className="dropNavBtn">
							<Link to="/">Home</Link>
						</button>
						<button className="dropNavBtn">
							<Link to="/login">Login</Link>
						</button>
						<button className="dropNavBtn">
							<Link to="/">Sign Up</Link>
						</button>
					</div>
				</div>
			);
		}
		return (
			<div className={this.state.dropDownAnimate} id="dropDownNav">
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
				</div>
				<div id="dropSearchBar">
					<i className="fas sIcon fa-search" />
					<input id="dropInput" />
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
