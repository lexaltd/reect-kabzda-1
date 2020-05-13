import {setAuthUserData} from "./auth-reducer";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 12,},
		{id: 2, message: "It's my first post", likesCount: 10,},
		{id: 3, message: 'Ура!!!', likesCount: 2,},
	],
	profile: null,
	status: "",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.newPostText,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			};
		}
		// case UPDATE_NEW_POST_TEXT: {
		// 	return {
		// 		...state,
		// 		newPostText: action.newText,
		// 	};
		// }
		case SET_USER_PROFILE: {
			return {...state, profile: action.profile}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case DELETE_POST:
			return {...state, posts: state.posts.filter(p => p.id != action.postId)}
		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
// export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

//(это thunk)функция которая диспачит(dispatch) обычные экшены(action),которые делают асинхроную работу
export const getUserProfile = (userId) => async (dispatch) => {
	let response = await usersAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
}


export const getStatus = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));

}

export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
}

export default profileReducer;