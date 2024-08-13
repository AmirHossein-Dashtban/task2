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
		showChcked: (state) => {
			state.value = 'checked';
		},
		showUnchecked: (state) => {
			state.value = 'unchecked';
		},
	},
});

export const { showAll, showChcked, showUnchecked } = filterSlice.actions;

export default filterSlice.reducer;
