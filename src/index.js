import React from "react";
import ReactDOM from "react-dom";

/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import configureStore from './redux/store';
//加入 normalize.css
//https://stackoverflow.com/questions/42119878/how-to-use-normalize-css-using-npm-install-with-webpack
import "normalize.css";

//import "assets/css/index.css";

//import App from "./views/App";
//import App from "./views/Login/Auth";

import registerServiceWorker from "./registerServiceWorker";

import routes from "./routes";

// @Store
//
// store = createStore(reducer)
// 使用redux dev tools
// 如果要正常使用是使用 
//const store = createStore(itemApp)
// const store = createStore(
// 	itemApp,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = configureStore();

// Views
// const renderApp = appRoutes => {
// 	ReactDOM.render(
// 		<BrowserRouter>{appRoutes}</BrowserRouter>,
// 		document.getElementById("root")
// 	);
// };
// renderApp(routes);

// Views
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>{routes}</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

registerServiceWorker();
