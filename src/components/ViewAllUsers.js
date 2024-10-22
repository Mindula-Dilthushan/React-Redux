/**
 *
 * project name     : react-redux
 * project author   : mindula dilthushan
 * author email     : minduladilthushan1@gmail.com
 *
 *
 */
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectUser} from "../actions/userAction";
import SelectUser from "./SelectUser";

const mapStateToProps = (state) => {
    return {
        user: state.user.user || [],
    };
};

const ViewAllUsers = (props) => {


    useEffect(() => {
    }, []);

    const usersList = () => {

        if (!Array.isArray(props.user)) {
            return null;
        }

        return props.user.map((user) => (
            <li key={user.id} onClick={() => props.selectUser(user)}>
                <h3>User ID : {user.userId} </h3>
                <h3>User Name : {user.userName} </h3>
                <h3>User Email : {user.userEmail} </h3>
                <h3>User Description : {user.userDesc} </h3>
                <br/>
            </li>
        ));
    };


    if (!props.user || props.user.length === 0) {
        return (
            <div>
                <h3>Click the Button first!</h3>
            </div>
        );
    } else {
        return <>
            <ul>{usersList()}</ul>
            <SelectUser/>
        </>;
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ViewAllUsers);

