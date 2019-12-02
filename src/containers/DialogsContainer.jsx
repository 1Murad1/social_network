import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../actions/DialogAction";
import Dialogs from "../components/Dialogs/Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		newMessageBody: state.dialogsPage.newMessageBody,
		dialogsPage: state.dialogsPage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageCreator())
		},
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
