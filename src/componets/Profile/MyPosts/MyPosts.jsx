import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

	let postsElements = props.posts.map(el => (<Post message={el.message} id={el.id} likesCount={el.likesCount}/>));

	let newPostElement = React.createRef();
	const addPost = () => {
		let text = newPostElement.current.value;
		// props.addPost(text);
		// props.dispatch({type: 'ADD-POST', message: text});
		props.dispatch(addPostActionCreator(text));
		newPostElement.current.value = '';
	};

	return (
		<div className={s.postsBlock}>
			<h3>My post</h3>
			<div>
				<div>
					<textarea ref={newPostElement}/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
};

export default MyPosts;