import { configureStore } from '@reduxjs/toolkit';
import taskSlice from '../pages/tasks/taskSlice';
import filterSlice from '../pages/tasks/filterSlice';

export const store = configureStore({
	reducer: {
		task: taskSlice,
		filter: filterSlice,
	},
});
