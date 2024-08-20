
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    UPDATE_TASK,
} from './asyncActions';


const initialState = {
    list: [],
    totalPage: 0,
    isLoading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                totalPage: action.payload.page,
                list: action.payload.data,
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case UPDATE_TASK:
            return {
                ...state,
                isLoading: false,
                list: state.list.map((item, index) => {
                    if (item.id === action.payload) {
                        return { ...item, isCompleted: !item.isCompleted };
                    } else return item;
                })
            };
        default:
            return state;
    }
};

export default reducer;