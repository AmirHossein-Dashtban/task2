import React from "react";
import ReactDOM from "react-dom/client";
import PocketBaseProvider from "./context/pocketbase/PocketBaseProvider";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import "./index.css";
import { getME } from "./pages/login/userSlice.js";
import getCookie from "./lib/getCookie.jsx";

const token = getCookie(document.cookie)[3];
const userName = getCookie(document.cookie)[0];
const userPassword = getCookie(document.cookie)[1];

token && store.dispatch(getME({ userName, userPassword }));

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PocketBaseProvider>
				<App />
			</PocketBaseProvider>
		</Provider>
	</React.StrictMode>
);
