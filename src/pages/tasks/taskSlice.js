import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		add: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { add } = taskSlice.actions;

export default taskSlice.reducer;
