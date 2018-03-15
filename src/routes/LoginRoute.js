import React from "react";
import { Route } from "react-router-dom";

export function LoginRoute({ component: Component, ...rest }) {
	return (
		<div className="login">
			<div className="loginHeader">Login Header</div>
			<Route {...rest} render={props => <Component {...props} />} />
		</div>
	);
}
