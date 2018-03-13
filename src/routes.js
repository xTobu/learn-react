import React from "react";
import {
	Route,
	Link,
	Redirect,
	Switch,
	browserHistory,
} from "react-router-dom";

import { LoginRoute } from "./routes/LoginRoute";
import { AdminRoute } from "./routes/AdminRoute";

/* LoginRoute */
import Login from "./views/Login/Login";
import Forgot from "./views/Login/Forgot";

/* AdminRoute */
import Home from "./views/Admin/Home";
import About from "./views/Admin/About";
import About_Me from "./views/Admin/About/Me";


/*
相關路由設置
 */
export default (
	<Switch>
		<LoginRoute path="/" exact component={Login} />
		<LoginRoute path="/login" component={Login} />
		<LoginRoute path="/forgot" component={Forgot} />

        <AdminRoute path="/admin" exact component={Home} />

        <AdminRoute path="/about" exact component={About} />
        <AdminRoute path="/about/:userid" component={About_Me} />

        <Route render={() => <h3>No Match Route</h3>} />
	</Switch>
);
