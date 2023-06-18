/**
 *
 * project name     : react-redux
 * project author   : mindula dilthushan
 * author email     : minduladilthushan1@gmail.com
 *
 *
 */
import {FETCH_USERS_CLICK} from "../actions/types";

const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_CLICK:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state
    }
};

export default userReducer;
