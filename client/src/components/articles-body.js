import React, { Component } from "react";
import "../styles/articles-body.css";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/actions";
import { Link, withRouter } from "react-router-dom";

class ArticlesBody extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return <div id="articlesBody" />;
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	};
}
export default connect(
	mapStateToProps,
	{ fetchPosts }
)(ArticlesBody);
