/**
 *
 * project name     : react-redux
 * project author   : mindula dilthushan
 * author email     : minduladilthushan1@gmail.com
 *
 *
 */
import {combineReducers} from "redux";
import userReducer from "./user.reducer";
import userSelectReducer from "./user_select.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    select_user: userSelectReducer
})

export default rootReducer;
