import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Message = (props) => {

	return(
		<div className={s.message}>
			<NavLink>{props.message}</NavLink>
		</div>
	)
}

export default Message;