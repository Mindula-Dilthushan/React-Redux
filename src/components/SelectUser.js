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

const mapStateToProps = (state) => {
    return {
        selectedUser: state.select_user.select_user || [],
    };
}


const SelectUser = (props) => {

    useEffect(() => {
        console.log(props.selectedUser)
    }, []);

    if (!props.selectedUser) {
        return (<h3> Select a User... </h3>);
    } else {
        return (
            <div>
                <h4> User ID {props.selectedUser.userId} </h4>
                <h4> User Name {props.selectedUser.userName} </h4>
                <h4> User Email {props.selectedUser.userEmail} </h4>
                <h4> User Description {props.selectedUser.userDesc} </h4>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SelectUser)
