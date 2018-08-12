import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/article.css";
import { fetchPost } from "../actions/actions";
import post from "../reducers/post-reducer";
class Article extends Component {
	componentWillMount() {
		const ide = Number(this.props.match.params.id) + 1;

		this.props.fetchPost(ide);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		if (!this.props.post) {
			return "loading";
		}
		const post = this.props.post;
		return (
			<div id="artContainer">
				<div id="imgHolder">
					<img id="postPic" src={post.pic} />
				</div>

				<div id="article">
					<div id="artTitle">{post.items.title}</div>
					<div id="artBody">{post.items.body}</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		post: state.post
	};
}
export default connect(
	mapStateToProps,
	{ fetchPost }
)(Article);
