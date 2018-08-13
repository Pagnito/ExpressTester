import React, { Component } from "react";
import { Field, reduxForm, reset } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { Link, withRouter } from "react-router-dom";

import "../styles/profile.css";
class NewArticle extends Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.props.hideForm)} autoComplete="off" method="POST" id="artForm">
				<Field name="title" type="text" id="artTitle" component="input" placeholder="Title" />
				<Field name="story" type="text" id="story" component="textarea" placeholder="Story" />
				<div id="submBtnAligner">
					<button onClick={() => this.props.postArticle(this.props.formVals, this.props.history)} id="submArticle">
						Submit
					</button>
				</div>
			</form>
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
	form: "article"
})(NewArticle);
export default connect(
	mapStateToProps,
	actions
)(withRouter(NewArticle));
