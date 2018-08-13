import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NewArticle from "./newArticle";

import "../styles/profile.css";

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			email: "",
			biggerImg: ""
		};
	}
	submitted() {
		document.getElementById("artForm").classList.remove("visible");
		document.getElementById("artForm").classList.add("invisible");
	}
	renderProfile() {
		const img = this.props.user.image.url;
		const image = img.substring(img.length - 2, 0) + 350;
		function showArticleForm() {
			document.getElementById("artForm").classList.remove("invisible");
			document.getElementById("artForm").classList.add("visible");
		}

		return (
			<div id="profileContainer">
				<div id="profileSheet">
					<div id="profileInfo">
						<div id="imgWrap">
							<img id="proImg" src={image} />
						</div>
						<div id="profileEdits">
							<div className="fieldWrapper">
								<i className="fas fa-pen" />
								<p id="usrName">{this.props.user.userName}</p>
							</div>
							<div className="fieldWrapper">
								<p className="usrFields">{this.props.user.email[0].value}</p>
							</div>
						</div>
					</div>
					<div id="thisUserArticles">
						<i onClick={showArticleForm} id="addArticle" className="fas fa-plus-circle" />
						<NewArticle hideForm={this.submitted} />
					</div>
				</div>
			</div>
		);
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
