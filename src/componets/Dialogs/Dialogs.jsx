import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
	let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);
	let newMessageBody = state.newMessageBody;


	// let onSendMessageClick = () => {
	// 	props.sendMessage();
	// }
	//
	// let onNewMessageChange = (e) => {
	// 	let body = e.target.value;
	// 	props.updateNewMessageBody(body);
	// }


	const addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	};

	if (!props.isAuth) return <Redirect to={"/login"} /> ;

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
			</div>
			{/*<AddMessageFormRedux onSubmit={addNewMessage} />*/}
			<AddMessageForm onSubmit={addNewMessage} />
		</div>
	);
};

// const AddMessageForm = (props) => {
// 	//handleSubmit - это callBack функция из redux-form
// 	return (
// 		<form onSubmit={props.handleSubmit}>
// 			<div>
// 				{/*<Field component="textarea" name="newMessageBody" placeholder="Введите ваше сообщение" />*/}
// 				<Field component={Textarea}
// 							 validate={[required, maxLength50]}
// 							 placeholder='Введите ваше сообщение' name="newMessageBody" />
// 			</div>
// 			<div>
// 				<button>Send</button>
// 			</div>
// 		</form>
// 	)
// };
//
// const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;