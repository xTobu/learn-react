import React, { Component } from "react";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state={

		}
	}
	handleLogin(){
		console.log(123)
	}
	render() {
		return (
			<div className="Login">
				帳號
				<input type="text" />
				<br />
				密碼
				<input type="text" />
				<br />
				<button onClick={this.handleLogin}>新增項目</button>
			</div>
		);
	}
}

export default Login;
