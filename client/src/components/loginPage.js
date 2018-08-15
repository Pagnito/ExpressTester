import React, { Component } from "react";
import "../styles/login-page.css";
class LoginPage extends Component {
	render() {
		return (
			<div id="loginPageWrapper">
				<div id="loginBoxWrapper">
					<div id="form">
						<label className="loginFormLabels">User Name</label>
						<input className="loginInput" />
						<label className="loginFormLabels">Password</label>
						<input className="loginInput" />
						<div className="loginFormBtnsWrap">
							<button className="loginFormBtns" type="submit">
								Login
							</button>
							<button className="loginFormBtns">Sign Up</button>
						</div>
						<a id="googleAuthLink" href="/login/auth/google">
							Login With Google
						</a>
					</div>
				</div>
			</div>
		);
	}
}
export default LoginPage;
