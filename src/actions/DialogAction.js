import {send_message, update_new_message_body} from "../reducers/dialogsReducer";

export const sendMessageCreator = () => {
    return {
        type: send_message
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: update_new_message_body,
        body: body
    }
}