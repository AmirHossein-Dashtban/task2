import { SET_VISIBILITY } from './asyncActions';

const initialState = {
    filter: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBILITY:
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
};

export default reducer;