import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
} from "../reducers/usersReducer";

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

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: setCurrentPage,
        currentPage: currentPage
    }
}

export const  setTotalUsersCountActionCreator = (totalCount) => {
    return {
        type:  setTotalUsersCount,
        totalCount:  totalCount
    }
}

export const  toggleIsFetchingActionCreator = (isFetching) => {
    return {
        type:  toggleIsFetching,
        isFetching:  isFetching
    }
}