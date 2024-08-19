import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../pages/tasks/taskSlice";
import filterSlice from "../pages/tasks/filterSlice";
import userSlice from "../pages/login/userSlice";
import alertSlice from "../components/alert/alertSlice";

export const store = configureStore({
	reducer: {
		task: taskSlice,
		filter: filterSlice,
		userInfo: userSlice,
		isShowAlert: alertSlice,
	},
});
