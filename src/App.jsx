import { React, useState, useContext, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Tasks, CreateTask, EditTask, Login } from './pages';
import { AuthContext } from './context/auth/AuthContext';
import PocketBaseContext from './context/pocketbase/PocketBaseContext';
import getCookie from './lib/getCookie';

export default function App() {
	const [isLogin, setIsLogin] = useState(false);
	const [userName = null, userPassword = null, userID = null] = getCookie(
		document.cookie
	);
	const pb = useContext(PocketBaseContext);

	const handleLogout = () => {
		setIsLogin(false);
		document.cookie = `userToken=; expires=; path=/`;
		document.cookie = `userID=; expires=; path=/`;
		document.cookie = `userName=; expires=; path=/`;
		document.cookie = `userPassword=; expires=; path=/`;
	};

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Login />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/list/:pageNumber',
			element: <Tasks />,
		},
		{
			path: '/create',
			element: <CreateTask />,
		},
		{
			path: '/edit',
			element: <EditTask />,
		},
	]);

	useEffect(() => {
		pb.collection('users')
			.authWithPassword(userName, userPassword)
			.then((res) => {
				setIsLogin(true);
			})
			.catch((error) => {});

		pb.authStore.clear();
	}, []);

	return (
		<AuthContext.Provider
			value={{ isLogin, setIsLogin, handleLogout, userID, userName }}
		>
			<RouterProvider router={router} />
		</AuthContext.Provider>
	);
}
