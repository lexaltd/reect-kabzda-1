import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);


const AddMessageForm = (props) => {
	//handleSubmit - это callBack функция из redux-form
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				{/*<Field component="textarea" name="newMessageBody" placeholder="Введите ваше сообщение" />*/}
				<Field component={Textarea}
							 validate={[required, maxLength50]}
							 placeholder='Введите ваше сообщение' name="newMessageBody" />
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	)
};

export default reduxForm({form: "dialog-add-message-form"})(AddMessageForm);
