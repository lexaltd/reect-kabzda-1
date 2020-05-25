import {setAuthUserData} from "./auth-reducer";
import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
		case SAVE_PHOTO_SUCCESS:
			debugger;
			return {...state, profile: {...state.profile, photos: action.photos }}
		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
// export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

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
	try {//Обработка ошибки
		const response = await profileAPI.updateStatus(status);
		console.log("status: " + response.status);

		if (response.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	} catch (error) {
		console.warn("Внимание: Необработанная ошибка в updateStatus. Причина: " + error);
		console.warn("status: " + error.response.status);
	}
}

export const savePhoto = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file);

	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
}

export const saveProfile = (profile) => async (dispatch, getState) => {
	const userId = getState().auth.userId;//Получаем из State userId
	const response = await profileAPI.saveProfile(profile);//Отправляем на сервер данные обновлённого профиля

	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(userId));//Запрашиваем у сервера новые данные профиля
	} else {
		debugger
		dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));//Если ошибка пришла с сервера, выведится общая ошибка для всей формы
		//Если ошибка пришла с сервера: И добавится ошибка именно под поле contacts.facebook, только надо распарсить ошибку(response.data.messages[0]) и найти к какому полю пришла
		dispatch(stopSubmit("edit-profile", {"contacts":{"facebook": response.data.messages[0]}} ));
		return Promise.reject(response.data.messages[0]);
	}
}

export default profileReducer;