import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogsData
	.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)

	let messagesElements = props.dialogsPage.messagesData
	.map(message => <Message message={message.message} />)

    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
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
                              placeholder="enter your message" />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
			</div>
		</div>
	)
}

export default Dialogs;
