import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";

// const FormControl = ({input, meta, child, ...props}) => {
// 	const hasError = meta.touched && meta.error;//Если объекте что то вводили и есть ошибка
const FormControl = ({input, meta: {touched, error}, children}) => {
	const hasError = touched && error;//Если объекте что то вводили и есть ошибка
	return (
		<div className={styles.formControl + " " + (hasError ? styles.error : "")}>
			<div>
				{/*{props.children}*/}
				{children}
			</div>
			{hasError && <span>{error}</span>}
		</div>
	)
}

export const Textarea = (props) => {
	const {input, meta, child, ...restProps} = props;
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps} />{/*//Чтоб сюда попала textarea в FormControl мы пишем {props.children}*/}
		</FormControl>
	)
}

export const Input = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
	<div>
		<Field placeholder={placeholder}
					 name={name}
					 validate={validators}
					 component={component}
					 {...props}
		/> {text}
	</div>
)
