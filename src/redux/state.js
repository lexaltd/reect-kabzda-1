import {renderEntireTree} from "../render";

let state = {
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
	},
}

export let addPost = (postMessage) => {
	// debugger;
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0,
	};

	state.profilePage.posts.push(newPost);
	renderEntireTree(state);
};


export default state;
