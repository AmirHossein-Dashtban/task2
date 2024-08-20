import { CHANGE_PAGE } from './asyncActions';

const initialState = {
    page: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            };
        default:
            return state;
    }
};

export default reducer;