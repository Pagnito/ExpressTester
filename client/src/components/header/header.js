import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/header.css";
import { Link } from "react-router-dom";
import SearchBar from "./search-bar";
import DropDownNav from "./dropDownNav";

class Header extends Component {
	renderProSettings = () => {
		var proSet = document.getElementById("profileSettings");
		var lilTriangle = document.getElementById("lilTriangle");
		if (proSet.classList == "revealProSettings") {
			proSet.classList.remove("revealproSettings");
			proSet.classList.add("hideProSettings");
			lilTriangle.classList.remove("revealTriangle");
			lilTriangle.classList.add("hideTriangle");
		} else {
			proSet.classList.remove("hideProSettings");
			proSet.classList.add("revealProSettings");
			lilTriangle.classList.remove("hideTriangle");
			lilTriangle.classList.add("revealTriangle");
		}
	};
	renderLoggedIn() {
		if (this.props.user) {
			if (window.outerWidth < 1000) {
				return (
					<div id="header">
						<span id="logoWrapper" className="reveal">
							<div>
								<p>noMaze</p>
							</div>
						</span>
					</div>
				);
			} else {
				return (
					<div id="header">
						<span id="logoWrapper" className="reveal">
							<div>
								<p>noMaze</p>
							</div>
						</span>
						<span id="navBarWrapper" className="reveal">
							<div id="profileLinks">
								<p id="userName">{this.props.user.userName}</p>
								<i className="far fa-bell white notificationBell" />
								<img onClick={this.renderProSettings} id="avatar" src={this.props.user.image.url} />
								<div onClick={this.renderProSettings} id="profileSettings">
									<div id="lilTriangle" />
									<div className="setting">Profile</div>
									<div className="setting">Settings</div>

									<a href="/api/logout">
										<div className="setting">Log Out</div>
									</a>
								</div>
							</div>
							<div id="navBtnWrapper">
								<SearchBar />
								<div id="navBtns">
									<button className="navBtn">
										<Link to="/">Home</Link>
									</button>
									<button className="navBtn">
										<Link to="/profile">Profile</Link>
									</button>
									<button className="navBtn">
										<Link to="/about">About</Link>
									</button>
								</div>
							</div>
						</span>
					</div>
				);
			}
		} else {
			if (window.outerWidth < 1000) {
				return (
					<div id="header">
						<span id="logoWrapper" className="reveal">
							<div>
								<p>noMaze</p>
							</div>
						</span>
					</div>
				);
			}
			return (
				<div id="header">
					<span id="logoWrapper" className="reveal">
						<div>
							<p>noMaze</p>
						</div>
					</span>
					<span id="navBarWrapper" className="reveal">
						<div id="authWrapper">
							<Link to="/login">
								<button className="loginBtns">Login</button>
							</Link>
							<Link to="/login">
								<button className="loginBtns">Sign Up</button>
							</Link>
						</div>
						<div id="navBtnWrapper">
							<SearchBar />
							<div id="navBtns">
								<button className="navBtn">
									<Link to="/">Home</Link>
								</button>
								<button className="navBtn">About</button>
							</div>
						</div>
					</span>
				</div>
			);
		}
	}

	render() {
		return <div>{this.renderLoggedIn()}</div>;
	}
}
function mapStateToProps(state) {
	return {
		user: state.users
	};
}
export default connect(mapStateToProps)(Header);
