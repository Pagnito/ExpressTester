import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NewArticle from "./newArticle";
import * as actions from "../actions/actions";
import "../styles/profile.css";

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slide: "slide"
		};
	}
	componentWillMount() {
		this.props.fetchUserArticles();
	}

	submitted() {
		document.getElementById("artForm").classList.remove("visible");
		document.getElementById("artForm").classList.add("slideUp");
	}

	renderArticles() {
		return this.props.userArticles.map((article, ind) => {
			return (
				<div key={ind} id="thisUserArticle">
					<div id="artImage" style={{ backgroundColor: "gold" }} />
					<div id="artContent">
						<div id="articleTitle">{article.title}</div>
						<div id="artPreview">{article.story}</div>
						<div id="artInfo">
							<div id="userArtThumbs">
								<i className="fas woo fa-thumbs-up" />
								<i className="fas woo fa-thumbs-down" />
							</div>
							<div>date</div>
						</div>
					</div>
				</div>
			);
		});
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
		if (this.props.user && this.props.userArticles) {
			const img = this.props.user.image.url;
			const image = img.substring(img.length - 2, 0) + 350;

			return (
				<div id="profileContainer">
					<div id="profileSheet" className={this.state.slide}>
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
						<div id="newArticleWrapper">
							<NewArticle hideForm={this.submitted} />
						</div>
						{this.renderArticles()}
					</div>
				</div>
			);
		}
	}
}
function mapStateToProps(state) {
	return {
		user: state.users,
		userArticles: state.userArticles.items
	};
}
export default connect(
	mapStateToProps,
	actions
)(Profile);
