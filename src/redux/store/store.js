import { createStore } from "redux";

import itemApp from "../reducers";
export default function configureStore() {
	const store = createStore(
		itemApp,
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
}
