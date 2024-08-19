import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export const userLogin = createAsyncThunk(
	"userInfo/login",
	async ({ userID, userPassword }) => {
		const authData = await pb
			.collection("users")
			.authWithPassword(userID, userPassword);
		return authData;
	}
);

export const getME = createAsyncThunk(
	"userInfo/getME",
	async ({ userName, userPassword }) => {
		const authData = await pb
			.collection("users")
			.authWithPassword(userName, userPassword);
		return authData;
	}
);

const initialState = {
	value: {
		userID: "",
		userName: "",
		userPassword: "",
		userToken: "",
	},
	status: "idle",
};

const userSlice = createSlice({
	name: "userInfo",
	initialState,
	reducers: {
		logout: (state, action) => {
			state.value = { ...initialState.value };
			state.status = initialState.status;

			document.cookie = `userToken=; expires=; path=/`;
			document.cookie = `userID=; expires=; path=/`;
			document.cookie = `userName=; expires=; path=/`;
			document.cookie = `userPassword=; expires=; path=/`;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(userLogin.fulfilled, (state, action) => {
				document.cookie = `userToken=${action.payload.token}; expires=; path=/`;
				document.cookie = `userID=${action.payload.record.id}; expires=; path=/`;
				document.cookie = `userName=${action.payload.record.username}; expires=; path=/`;
				document.cookie = `userPassword=12345678; expires=; path=/`;

				state.value = {
					userID: action.payload.record.id,
					userName: action.payload.record.username,
					userPassword: 12345678,
					userToken: action.payload.token,
				};
			})
			.addCase(userLogin.rejected, (state, action) => {
				state.status = "rejected";
			})
			.addCase(getME.pending, (state, action) => {
				state.status = "pending";
			})
			.addCase(getME.fulfilled, (state, action) => {
				state.value = {
					userID: action.payload.record.id,
					userName: action.payload.record.username,
					userPassword: 12345678,
					userToken: action.payload.token,
				};
				state.status = "succeeded";
			});
	},
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
