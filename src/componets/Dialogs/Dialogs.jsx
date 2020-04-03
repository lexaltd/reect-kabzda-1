import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

	let dialogsData = [
		{id: 1, name: 'Dimuy'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Valer'},
	]

	let messagesData = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Au'},
		{id: 3, message: 'Yo'},
	]

	let dialogsElements = dialogsData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>));
	let messagesElements = messagesData.map(m => (<Message message={m.message} id={m.id}/>));

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>
	);
};

export default Dialogs;