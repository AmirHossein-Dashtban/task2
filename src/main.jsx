import React from 'react';
import ReactDOM from 'react-dom/client';
import PocketBaseProvider from './context/pocketbase/PocketBaseProvider';
import App from './App.jsx';
import './index.css';
import store from './redux/store.js';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store} >
			<PocketBaseProvider>
				<App />
			</PocketBaseProvider>
		</Provider>
	</React.StrictMode>
);
