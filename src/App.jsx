import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Tasks, CreateTask, EditTask, Login } from './pages';

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
		path: '/list/:pageNumber',
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
	return <RouterProvider router={router} />;
}
