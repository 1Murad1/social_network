import {follow, unfollow, setUsers} from "../reducers/usersReducer";

export const followActionCreator = (userId) => {
    return {
        type: follow,
        userId: userId
    }
}

export const unFollowActionCreator = (userId) => {
    return {
        type: unfollow,
        userId: userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: setUsers,
        users: users
    }
}