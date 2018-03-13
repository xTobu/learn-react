import React, { Component } from "react";
import {
	Route,
	BrowserRouter,
	Link,
	Redirect,
	Switch,
	browserHistory,
} from "react-router-dom";

export function LoginRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props => (
					<Component {...props} />
			)}
		/>
	);
}
