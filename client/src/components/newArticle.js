import React, { Component } from "react";
import { Field, reduxForm, reset } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { Link, withRouter } from "react-router-dom";
import { animateScroll } from "react-scroll";

import "../styles/profile.css";
class NewArticle extends Component {
	handleImageUpload = (event) => {
		console.log(event.target.files);
	};

	render() {
		function removeArticleForm(e) {
			e.preventDefault();
			document.getElementById("artForm").classList.add("slideUp");
			document.querySelector(".pho").classList.remove("showImgIcons");
			document.querySelector(".pho").classList.add("hideImgIcons");
			document.querySelector(".phos").classList.remove("showImgIcons");
			document.querySelector(".phos").classList.add("hideImgIcons");
		}
		function showArticleForm() {
			document.getElementById("artForm").classList.add("visible");
			document.getElementById("artForm").classList.remove("slideUp");
			document.querySelector(".pho").classList.remove("hideImgIcons");
			document.querySelector(".pho").classList.add("showImgIcons");
			document.querySelector(".phos").classList.remove("hideImgIcons");
			document.querySelector(".phos").classList.add("showImgIcons");
			if (window.outerWidth < 600) {
				animateScroll.scrollTo(300);
			}
			if (window.innerHeight < 900) {
				animateScroll.scrollTo(550);
			}
		}
		return (
			<div>
				<div id="addArticleIcons">
					<i onClick={showArticleForm} id="addArticle" className="fas fa-plus-circle" />
					<label className="fa-imageHolder">
						<input onChange={this.handleImageUpload} type="file" />
						<i className="fas pho fa-image" />
					</label>
					<label className="fa-imageHolder2">
						<input type="file" />
						<i className="fas phos fas fa-quote-right" />
					</label>
				</div>
				<form onSubmit={this.props.handleSubmit(this.props.hideForm)} autoComplete="off" method="POST" id="artForm">
					<Field name="title" type="text" id="artTitle" component="input" placeholder="Title" />
					<Field name="story" type="text" id="story" component="textarea" placeholder="Story" />
					<div id="submBtnAligner">
						<button onClick={removeArticleForm} id="cancelArticle">
							<i className="fas yass fa-undo-alt" />
						</button>
						<button onClick={() => this.props.postArticle(this.props.formVals, this.props.history)} id="submArticle">
							<i className="far yass fa-thumbs-up" />
							<i className="fas yass fa-beer" />
							<i className="fas yass fa-code" />
						</button>
					</div>
				</form>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		formVals: state.form.article
	};
}
NewArticle = reduxForm({
	// a unique name for the form
	form: "article",
	destroyOnUnmount: true
})(NewArticle);
export default connect(
	mapStateToProps,
	actions
)(withRouter(NewArticle));
