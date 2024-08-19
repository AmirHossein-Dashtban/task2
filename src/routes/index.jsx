// import {
// 	Route,
// 	createBrowserRouter,
// 	createRoutesFromElements,
// } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import { Tasks, CreateTask, EditTask, Login } from "../pages";
// import PrivateRoute from "../components/private-route/privateRoute";
// import Loader from "../components/loader/Loader";

// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route path='/'>
// 			<Route index element={<Login />} />
// 			<Route path='login' element={<Login />} />
// 			<Route element={<PrivateRoute />}>
// 				<Route path='list/:pageNumber' element={<Tasks />} />
// 				<Route path='create' element={<CreateTask />} />
// 				<Route path='edit/:taskID' element={<EditTask />} />
// 			</Route>
// 		</Route>
// 	)
// );

// const Index = () => {
// 	return <RouterProvider router={router} />;
// };

// export default Index;
