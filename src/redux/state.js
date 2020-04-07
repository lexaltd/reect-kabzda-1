const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you?', likesCount: 12,},
				{id: 2, message: "It's my first post", likesCount: 10,},
				{id: 3, message: 'Ура!!!', likesCount: 2,},
			],

		},
		dialogsPage: {
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
			newMessageBody: '',
		},
		sidebar:{},
	},
	_callSubscribe() {
	},

	getState(){return this._state},
	subscribe(observer) {
		this._callSubscribe = observer;

	},

	// addPost(postMessage) {
	// 	// debugger;
	// 	let newPost = {
	// 		id: 5,
	// 		message: postMessage,
	// 		likesCount: 0,
	// 	};
	//
	// 	this._state.profilePage.posts.push(newPost);
	// 	this._callSubscribe(this._state);
	// },

	dispatch(action){
		if (action.type === ADD_POST){
			// debugger;
			let newPost = {
				id: 5,
				message: action.message,// message: postMessage,
				likesCount: 0,
			};

			this._state.profilePage.posts.push(newPost);
			this._callSubscribe(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscribe(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messages.push({id: 6, message: body});
			this._callSubscribe(this._state);
		}
	},
}

export const addPostActionCreator = (text)=>({type: ADD_POST, message: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: body });


window.store = store;


export default store;
