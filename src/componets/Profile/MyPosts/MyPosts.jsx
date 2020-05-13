import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import {addPostActionCreator} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
	//handleSubmit - это callBack функция из redux-form
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name="newPostText" component={Textarea} placeholder={"Введите ваше сообщение"}
							 validate={[required, maxLength10]} />
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

// const MyPosts = (props) => {
const MyPosts = React.memo(props => {
		 console.log("RENDER YO");

		// let postsElements = props.posts.map(el => (<Post message={el.message} id={el.id} likesCount={el.likesCount}/>));
		let postsElements =
			[...props.posts]
				.reverse()
				.map(el => (<Post message={el.message} id={el.id} likesCount={el.likesCount}/>));

		let newPostElement = React.createRef();

		// let onPostChange = () => {
		// 	let text = newPostElement.current.value;
		// 	props.updateNewPostText(text);
		// };

		const onAddPost = (values) => {
			props.addPost(values.newPostText);
		};

		return (
			<div className={s.postsBlock}>
				<h3>My post</h3>
				{/*<div>*/}
				{/*<div>*/}
				{/*<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>*/}
				{/*</div>*/}
				{/*<div>*/}
				{/*<button onClick={onAddPost}>Add post</button>*/}
				{/*</div>*/}
				{/*</div>*/}
				<AddNewPostFormRedux onSubmit={onAddPost}/>
				<div className={s.posts}>
					{postsElements}
				</div>
			</div>
		);
});

export default MyPosts;