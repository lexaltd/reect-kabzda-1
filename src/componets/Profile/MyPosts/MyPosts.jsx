import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let postData = [
		{id: 1, message: 'Hi, how are you?', likesCount: 12,},
		{id: 2, message: "It's my first post", likesCount: 10,},
		{id: 3, message: 'Ура!!!', likesCount: 2,},
	]

	let postsElements = postData.map(el => (<Post message={el.message} id={el.id} likesCount={el.likesCount}/>));

	return (
		<div className={s.postsBlock}>
			<h3>My post</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
				{/*<Post message='Hi, how are you?'/>*/}
				{/*<Post message="It's my first post"/>*/}
				{/*<Post message='Ура!!!'/>*/}
			</div>
		</div>
	);
};

export default MyPosts;