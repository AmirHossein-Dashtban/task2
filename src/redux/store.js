import { configureStore, Tuple } from '@reduxjs/toolkit'
import TaskReduer from './tasks/tasksSlice';
import TasksFilterReduer from './tasks/tasksFilterSlice';
import TasksPaginationReduer from './tasks/paginationSlice';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

export default configureStore({
    reducer: {
        tasks: TaskReduer,
        filter: TasksFilterReduer,
        page: TasksPaginationReduer
    },
    middleware: () => new Tuple(thunk, logger)
});