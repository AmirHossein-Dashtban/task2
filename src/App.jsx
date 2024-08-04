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
		path: '/tasks',
		element: <Tasks />,
		// loader: rootLoader,
	},
	{
		path: '/createtask',
		element: <CreateTask />,
		// loader: rootLoader,
	},
	{
		path: '/edittask',
		element: <EditTask />,
		// loader: rootLoader,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
