import {add_post, update_new_post_text} from "../reducers/profileReducer";

export const addPostActionCreator = () => {
    return {
        type: add_post
    }
}

export const updateNewPostTextActionCreator = text => {
    return {
        type: update_new_post_text,
        newText: text
    }
}