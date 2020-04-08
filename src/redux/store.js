import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

	dispatch(action){
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscribe(this._state);
	},
}

window.store = store;


export default store;
