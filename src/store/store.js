/**
 *
 * project name     : react-redux
 * project author   : mindula dilthushan
 * author email     : minduladilthushan1@gmail.com
 *
 *
 */
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root.reducer";
import {devToolsEnhancer} from "redux-devtools-extension";

const middleware = [thunk];
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        devToolsEnhancer()
    )
);

export default store;

