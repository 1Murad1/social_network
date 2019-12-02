export const update_new_message_body = "UPDATE-NEW-MESSAGE-BODY"
export const send_message = "SEND-MESSAGE";

let initialState = {
    messagesData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "GoodBay"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ],
    dialogsData: [
        {id: 1, name: "Sanya"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Lera"},
        {id: 4, name: "Ira"},
        {id: 5, name: "Nastya"},
        {id: 6, name: "Andrey"}
    ],
    newMessageBody: ""
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case send_message:
            let newMessage = {
                id: 6,
                message: state.newMessageBody
            }

            return {
                ...state,
                newMessageBody: "",
                messagesData: [...state.messagesData, newMessage]
            }
        case update_new_message_body:
            return {
                ...state,
                newMessageBody: action.body
            }
        default:
            return state;
    }
}

export default dialogsReducer;
