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

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer;
