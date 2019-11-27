import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

	let dialogsElements = state.dialogsData
	.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)

	let messagesElements = state.messagesData
	.map(message => <Message message={message.message} />)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = (event) => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

	return (
		<div className = {s.dialogs}>
			<div className={s.dialogsItems}>
				{ dialogsElements }
			</div>
			<div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <textarea value = {newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder="enter your message">
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
			</div>
		</div>
	)
}

export default Dialogs;
