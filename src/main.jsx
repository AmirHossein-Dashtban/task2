import React from 'react';
import ReactDOM from 'react-dom/client';
import PocketBaseContext from './context/pocketbase/PocketBaseProvider.jsx';
import PocketBaseProvider from './context/pocketbase/PocketBaseProvider';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PocketBaseProvider>
			<App />
		</PocketBaseProvider>
	</React.StrictMode>
);
