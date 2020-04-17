import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
	let postsElements = props.posts.map(el => (<Post message={el.message} id={el.id} likesCount={el.likesCount}/>));

	let newPostElement = React.createRef();
	const onAddPost = () => {
		//let text = newPostElement.current.value;
		props.addPost();
		// props.dispatch({type: 'ADD-POST', message: text});
		//props.dispatch(addPostActionCreator(text));
		//newPostElement.current.value = '';
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
		//let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
		//let action = updateNewPostTextActionCreator(text);
		//props.dispatch(action);
		//props.updateNewPostText(text);
	};

	return (
		<div className={s.postsBlock}>
			<h3>My post</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
};

export default MyPosts;