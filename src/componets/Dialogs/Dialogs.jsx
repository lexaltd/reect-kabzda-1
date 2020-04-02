import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	return (
		<div className={s.dialog+' '+s.active}>
			<NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
		</div>
	);
};

const Message = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	);
};


const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name="Dimuy" id="1"/>
				<DialogItem name="Andrey" id="2"/>
				<DialogItem name="Valer" id="3"/>
			</div>
			<div className={s.messages}>
				<Message message="Hi"/>
				<Message message="Au"/>
				<Message message="Yo"/>
			</div>
		</div>
	);
};

export default Dialogs;