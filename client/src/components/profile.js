import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/profile.css";
class Profile extends Component {
	renderProfile() {
		if (this.props.user) {
			return (
				<div id="profileContainer">
					<div id="profileSheet">hi</div>
				</div>
			);
		}
	}
	render() {
		if (!this.props.user) {
			return (
				<div id="loadingContainer">
					<div className="spinner">
						<div className="rect1" />
						<div className="rect2" />
						<div className="rect3" />
						<div className="rect4" />
						<div className="rect5" />
					</div>
				</div>
			);
		}
		return <div>{this.renderProfile()}</div>;
	}
}
function mapStateToProps(state) {
	return {
		user: state.users
	};
}
export default connect(mapStateToProps)(Profile);
