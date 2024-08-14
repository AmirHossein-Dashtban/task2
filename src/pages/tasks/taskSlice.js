import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PocketBase from 'pocketbase';

export const postTaskStatus = createAsyncThunk(
	'task/postStatus',
	async ({ taskID, isCompleted }) => {
		const pb = new PocketBase('http://127.0.0.1:8090');

		const response = await pb
			.collection('tasks')
			.update(taskID, { isCompleted });

		return response;
	}
);

export const fetchTasks = createAsyncThunk(
	'task/fetchTasks',
	async ({ userID, paginationNumber, filter }) => {
		const pb = new PocketBase('http://127.0.0.1:8090');

		let filterString = `userID = "${userID}"`;

		if (filter === 'completed') {
			filterString += ` && isCompleted = true`;
		} else if (filter === 'unCompleted') {
			filterString += ` && isCompleted = false`;
		}

		const resultList = await pb
			.collection('tasks')
			.getList(paginationNumber, 3, {
				filter: filterString,
			});

		return resultList;
	}
);

const initialState = {
	value: [],
	totalPages: 1,
};

export const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		add: (state, action) => {
			state.value = action.payload;
		},

		toggle: (state, action) => {
			state.value.map((task) => {
				if (task.id !== action.payload.taskID) {
					return task;
				} else {
					task.isCompleted = action.payload.iscompleted;
					return task;
				}
			});
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTasks.fulfilled, (state, action) => {
				state.value = [...action.payload.items];
				state.totalPages = action.payload.totalPages;
			})
			.addCase(postTaskStatus.fulfilled, (state, action) => {});
	},
});

export const { add, toggle } = taskSlice.actions;

export default taskSlice.reducer;
