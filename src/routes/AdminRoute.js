import React, { Component } from "react";
import Header from "../components/Header/Header";
import {
	Route,
	BrowserRouter,
	Link,
	Redirect,
	Switch,
	browserHistory,
} from "react-router-dom";

export function AdminRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props => (
				<div className="admin">
					<ul className="nav navbar-nav">
						<li>
							<Link to="/admin">admin</Link>
						</li>
						<li>
							<Link to="/about">/about</Link>
						</li>
						<li>
							<Link to="/about/me">/about/user/123</Link>
						</li>
					</ul>
					<main className="main">
						{/* <Switch /> */}
						<Header />
						<Component {...props} />
					</main>
				</div>
			)}
		/>
	);
}
