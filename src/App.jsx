import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Tasks, CreateTask, EditTask, Login } from "./pages";
import PrivateRoute from "./components/private-route/privateRoute";
import { useSelector } from "react-redux";
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='list/:pageNumber'
					element={
						<PrivateRoute>
							<Tasks />
						</PrivateRoute>
					}
				/>
				<Route
					path='create'
					element={
						<PrivateRoute>
							<CreateTask />
						</PrivateRoute>
					}
				/>
				<Route
					path='edit/:taskID'
					element={
						<PrivateRoute>
							<EditTask />
						</PrivateRoute>
					}
				/>
			</Routes>
		</Router>
	);
};

export default App;
