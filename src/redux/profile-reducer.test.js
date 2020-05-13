import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

//https://jestjs.io/docs/ru/expect

let state = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: 'It\'s my first post', likesCount: 11},
		{id: 3, message: 'Blabla', likesCount: 11},
		{id: 4, message: 'Dada', likesCount: 11}
	]
};

//length of posts should be incremented
it('длина постов должна быть увеличена', () => {
	// 1. test data(тестовые данные)
	let action = addPostActionCreator("it-kamasutra.com");

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation(проверяем что то ,что мы ожидаем получить)
	expect(newState.posts.length).toBe(5);
});

//message of new post should be correct
it('сообщение в новом посте должно быть правильным', () => {
	// 1. test data(тестовые данные)
	let action = addPostActionCreator("it-kamasutra.com");

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation(проверяем что то ,что мы ожидаем получить)
	expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

//after deleting length of messages should be decrement
it('после удаления длина постов должна быть уменьшена', () => {
	// 1. test data
	let action = deletePost(1);

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.posts.length).toBe(3);
});

//after deleting length shouldn't be decrement if id is incorrect
it(`после удаления длина не должна уменьшаться, если идентификатор неверен`, () => {
	// 1. test data
	let action = deletePost(1000);

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.posts.length).toBe(4);
});