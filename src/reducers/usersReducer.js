export const follow = "FOLLOW";
export const unfollow = "UN-FOLLOW";
export const setUsers = "SET-USERS";

let initialState = {
    users: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case setUsers:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}



export default usersReducer;
