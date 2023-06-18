/**
 *
 * project name     : react-redux
 * project author   : mindula dilthushan
 * author email     : minduladilthushan1@gmail.com
 *
 */
import React from "react";
import {bindActionCreators} from "redux";
import {connect, useDispatch} from "react-redux";
import {fetchUsers} from "../actions/userAction";

const ButtonComponent = () => {

    const dispatch = useDispatch();

    const handleFetchUsers = () => {
        dispatch(fetchUsers());
    }

    return (
        <div>
            <button onClick={handleFetchUsers}> Click Me</button>
        </div>
    )
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchUsers: fetchUsers}, dispatch)
}

export default connect(null, matchDispatchToProps)(ButtonComponent);
