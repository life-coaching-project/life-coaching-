import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createStore } from 'redux';
// import allReducer from "./components/Main/reducers";
// import {Provider} from "react-redux";
// const store = createStore(
// 	allReducer ,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 	);

ReactDOM.render(
	//  <Provider store={store}>
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	// </Provider>,
	document.getElementById("root")
);
