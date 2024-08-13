import { configureStore } from '@reduxjs/toolkit';
import taskSlice from '../pages/tasks/taskSlice';
import filterSlice from '../pages/tasks/filterSlice';
import pageSlice from '../pages/tasks/pageSlice';

export const store = configureStore({
	reducer: {
		task: taskSlice,
		filter: filterSlice,
		page: pageSlice,
	},
});
