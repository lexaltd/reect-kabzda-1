import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
// import Dialogs from "../../Dialogs/Dialogs";

// const MyPostsContainer = () => {
// 	// debugger;
// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				(store) => {
// 					let state = store.getState();
//
// 					const addPost = () => {
// 						store.dispatch(addPostActionCreator());
// 					};
//
// 					let onPostChange = (text) => {
// 						let action = updateNewPostTextActionCreator(text);
// 						store.dispatch(action);
// 					};
//
// 					return (
// 						<MyPosts updateNewPostText={onPostChange}
// 										 addPost={addPost}
// 										 posts={state.profilePage.posts}
// 										 newPostText={state.profilePage.newPostText}/>
// 					)
// 				}
// 			}
// 		</StoreContext.Consumer>
// 	);
// };

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		// updateNewPostText: (text) => {
		// 	let action = updateNewPostTextActionCreator(text);
		// 	dispatch(action);
		// },
		addPost: (newPostText) => {
			dispatch(addPostActionCreator(newPostText));
		},
	}
};

//connect - делает то что мы делали в (выше закоментировано) const MyPostsContainer = () => {
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;