import "../styles/styles.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Header from "./header/header";
import Profile from "./profile";
import ArticlesBody from "./articles-body";
import LoginPage from "./loginPage";
import Article from "./article";
import DropDownNav from "./header/dropDownNav";
import DropDownLink from "./header/dropDownLink";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropDownVisible: false,
			rerenderHeader: false
		};
		this.renderDropDown = this.renderDropDown.bind(this);
		this.renderDropLink = this.renderDropLink.bind(this);
		this.changeNavOnRezise = this.changeNavOnRezise.bind(this);
		window.addEventListener("resize", this.changeNavOnRezise);
	}
	changeNavOnRezise() {
		if (window.outerWidth < 1000) {
			this.setState({ rerenderHeader: true });
		} else {
			this.setState({ rerenderHeader: false });
		}
	}
	isItMobile() {
		if (this.state.dropDownVisible == true) {
			return <DropDownNav />;
		}
	}
	renderDropLink() {
		if (window.outerWidth < 1000) {
			return <DropDownLink dropDown={this.renderDropDown} />;
		}
	}
	renderDropDown() {
		this.setState({ dropDownVisible: this.state.dropDownVisible == false ? true : false });
	}
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		if (window.outerWidth < 1000) {
			return (
				<div>
					<BrowserRouter>
						<div id="appContainer">
							{this.renderDropLink()}
							{this.isItMobile()}
							<Header props={this.state.rerenderHeader} />
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/login" component={LoginPage} />
							<Route exact path="/post/:id" component={Article} />
							<Route exact path="/" component={ArticlesBody} />
						</div>
					</BrowserRouter>
				</div>
			);
		}
		return (
			<div>
				<BrowserRouter>
					<div id="appContainer">
						{this.renderDropLink()}
						{this.isItMobile()}
						<Header />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/post/:id" component={Article} />
						<Route exact path="/" component={ArticlesBody} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(App);
