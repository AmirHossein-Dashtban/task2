import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isShow: false,
};

const alertSlice = createSlice({
	name: "alert",
	initialState,
	reducers: {
		toggle: (state) => {
			state.isShow = !state.isShow;
		},
	},
});

export const { toggle } = alertSlice.actions;
export default alertSlice.reducer;
