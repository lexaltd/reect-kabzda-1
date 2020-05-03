import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
	//handleSubmit - это callBack функция из redux-form
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"Login"} name={"login"} component={"input"}/>
			</div>
			<div>
				<Field placeholder={"Password"} name={"password"} component={"input"}/>
			</div>
			<div>
				<Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
};

//Сначало вызовется handleSubmit ,она соберёт даннные проверит валидацию и т.д. ,а потом вызовет нащу функцию onSubmit и передаст в неё formData

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
	// return <h1>LOGIN</h1>

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
};

export default Login;