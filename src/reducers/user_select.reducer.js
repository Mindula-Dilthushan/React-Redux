/**
 *
 * project name     : react-redux
 * project author   : mindula dilthushan
 * author email     : minduladilthushan1@gmail.com
 *
 *
 */
import {SELECT_USER} from "../actions/types";

const initialState = {
    select_user: null
}

const userSelectReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_USER:
            return {
                ...state,
                select_user: action.payload
            };
        default:
            return state
    }
};

export default userSelectReducer;
