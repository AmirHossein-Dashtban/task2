import PocketBase from 'pocketbase';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const UPDATE_TASK = 'UPDATE_TASK';
export const SET_VISIBILITY = 'SET_VISIBILITY'
export const CHANGE_PAGE = 'CHANGE_PAGE';


const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST,
    };
};

const fetchDataSuccess = (data, page) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: { data: data, page: page },
    };
};

const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error,
    };
};

const updateTask = (task) => {
    return {
        type: UPDATE_TASK,
        payload: task,
    };
};

const setVisibility = (filter) => {
    return {
        type: SET_VISIBILITY,
        payload: filter,
    };
};

const setPage = (page) => {
    return {
        type: CHANGE_PAGE,
        payload: page,
    };
};

const pb = new PocketBase('http://127.0.0.1:8090');

// Thunk Action Creator
export const fetchData = (filter, paginationNumber) => {

    return (dispatch) => {
        pb.collection('tasks').getList(paginationNumber, 3, {
            filter: filter !== '' ? `isCompleted =${filter}` : '',
        }).then(response => {
            dispatch(fetchDataSuccess(response.items, response.totalPages));
        }).catch(error => {
            dispatch(fetchDataFailure(error.message));
        });
    };
};

export const toggleTask = (taskID, isCompleted) => {

    return (dispatch) => {
        pb.collection('tasks').update(taskID, { isCompleted: isCompleted }).then(response => {
            dispatch(updateTask(response.id));
        }).catch(error => {
            dispatch(fetchDataFailure(error.message));
        });
    };
};


export const changeFilter = (filter) => {
    return (dispatch) => {
        dispatch(setVisibility(filter));
        dispatch(setPage(1));

    }
};


export const changePage = (page) => {
    return (dispatch) => {
        dispatch(setPage(page));
    }
};
