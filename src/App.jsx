import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Tasks, CreateTask, EditTask, Login } from './pages';
import { StateContext, stateHandler } from './data/data';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/login',
		element: <Login />,
		// loader: rootLoader,
	},
	{
		path: '/list',
		element: <Tasks />,
		// loader: rootLoader,
	},
	{
		path: '/create',
		element: <CreateTask />,
		// loader: rootLoader,
	},
	{
		path: '/edit',
		element: <EditTask />,
		// loader: rootLoader,
	},
]);

export default function App() {
	const states = stateHandler();

	return (
		<StateContext.Provider value={states}>
			<RouterProvider router={router} />
		</StateContext.Provider>
	);
}
