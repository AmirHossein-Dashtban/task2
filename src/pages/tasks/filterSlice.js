import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 'all',
};

export const filterSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		showAll: (state) => {
			state.value = 'all';
		},
		completed: (state) => {
			state.value = 'completed';
		},
		unCompleted: (state) => {
			state.value = 'unCompleted';
		},
	},
});

export const { showAll, completed, unCompleted } = filterSlice.actions;

export default filterSlice.reducer;
