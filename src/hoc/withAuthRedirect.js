import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

//Берём из state нужные переменные объекты и добовлям их в props
let mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth
});

//HOC обёртка чтоб проверить зарегестрирован пользователь или нет
export const withAuthRedirect = (Component) => {

	class RedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Redirect to='/login' />

			return <Component {...this.props}/>
		}
	}

	let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

	return ConnectedAuthRedirectComponent;

}