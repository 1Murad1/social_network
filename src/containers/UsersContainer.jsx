import React from "react";
import Users from "../components/Users/Users";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../actions/UsersAction";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;