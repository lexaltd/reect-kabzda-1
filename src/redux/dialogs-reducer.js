const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	messages: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Au'},
		{id: 3, message: 'Yo'},
	],
	dialogs: [
		{id: 1, name: 'Dimuy'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Valer'},
	],
};

const dialogsReducer = (state = initialState, action) => {
	// let stateCopy = {
	// 	...state,
	// 	messages: [...state.messages],
	// };

	switch (action.type) {
		// case UPDATE_NEW_MESSAGE_BODY:
		// 	return {
		// 		...state,
		// 		newMessageBody: action.body
		// 	};
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, {id: 6, message: body}]
			};
			// let stateCopy = {...state};
			// let body = stateCopy.newMessageBody;
			// stateCopy.newMessageBody = '';
			// stateCopy.messages = [...state.messages];
			// stateCopy.messages.push({id: 6, message: body});
			// return stateCopy;
		default:
			return state;
	}
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
// export const updateNewMessageBodyCreator = (body) =>
// 	({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;