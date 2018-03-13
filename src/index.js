import React from "react";
import ReactDOM from "react-dom";

/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from "react-router-dom";

//加入 normalize.css
//https://stackoverflow.com/questions/42119878/how-to-use-normalize-css-using-npm-install-with-webpack
import "normalize.css";

//import "assets/css/index.css";

//import App from "./views/App";
//import App from "./views/Login/Auth";

import registerServiceWorker from "./registerServiceWorker";

import routes from "./routes";

// Views
const renderApp = appRoutes => {
	ReactDOM.render(
		<BrowserRouter>{appRoutes}</BrowserRouter>,
		document.getElementById("root")
	);
};

renderApp(routes);

registerServiceWorker();
