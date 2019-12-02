export const add_post = "ADD-POST";
export const update_new_post_text = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: "Hello", likesCount: 12},
        {id: 2, message: "Buy", likesCount: 11}
    ],
    newPostText: "it-kamasutra.com"
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case add_post: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case update_new_post_text: {
            return  {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export default profileReducer;