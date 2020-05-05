import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({input, meta, child, ...props}) => {
	const hasError = meta.touched && meta.error;//Если объекте что то вводили и есть ошибка
	return (
		<div className={styles.formControl + " " + (hasError ? styles.error : "")}>
			<div>
				{props.children}
			</div>
			{hasError && <span>{meta.error}</span>}
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
