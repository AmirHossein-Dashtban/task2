import React from 'react';
import ReactDOM from 'react-dom/client';
import PocketBaseProvider from './context/pocketbase/PocketBaseProvider';
import App from './App.jsx';
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PocketBaseProvider>
				<App />
			</PocketBaseProvider>
		</Provider>
	</React.StrictMode>
);
