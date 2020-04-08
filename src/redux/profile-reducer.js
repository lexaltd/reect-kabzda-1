const ADD_POST = 'ADD-POST';

let initialState = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 12,},
		{id: 2, message: "It's my first post", likesCount: 10,},
		{id: 3, message: 'Ура!!!', likesCount: 2,},
	],
};

const profileReducer = (state = initialState, action) => {
	if (action.type === ADD_POST){
		// debugger;
		let newPost = {
			id: 5,
			message: action.message,// message: postMessage,
			likesCount: 0,
		};

		state.posts.push(newPost);
	}
	return state;
}

export const addPostActionCreator = (text)=>({type: ADD_POST, message: text});

export default profileReducer;