import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"

// const LoginForm = (props) => {
const LoginForm = ({handleSubmit, error}) => {//Используем дестроктуризацию, это пишем вместо const LoginForm = (props) => {

	//handleSubmit - это callBack функция из redux-form
	return (
		<form onSubmit={handleSubmit}>
			{/*<div>*/}
				{/*<Field placeholder={"Email"} name={"email"}*/}
							 {/*validate={[required]}*/}
							 {/*component={Input}/>*/}
			{/*</div>*/}
			{/*<div>*/}
				{/*<Field placeholder={"Password"} name={"password"} type={"password"}*/}
							 {/*validate={[required]}*/}
							 {/*component={Input}/>*/}
			{/*</div>*/}
			{/*<div>*/}
				{/*<Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me*/}
			{/*</div>*/}
			{createField("Email", "email", [required], Input)}
			{createField("Password", "password", [required], Input, {type: "password"})}
			{createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

			{error && <div className={style.formSummaryError}>{error}</div>}
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
		props.login(formData.email, formData.password, formData.rememberMe);
	};

	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);