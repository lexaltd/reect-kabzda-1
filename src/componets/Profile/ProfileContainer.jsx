import React from 'react';
import Profile from "./Profile";
import * as axios from "axios/index";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	// constructor(props){
	// 	super(props);
	// }

	// вызывается сразу после монтирования (то есть, вставки компонента в DOM). В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			// userId = 1049;
			userId = this.props.authorizedUserId;
		}
		// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
		// 	.then(response => {
		// 		this.props.setUserProfile(response.data);
		// 	});
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	render() {
		// if (!this.props.isAuth) return <Redirect to={"/login"} />;
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
			</div>
		);
	};
}

//Берём из state нужные переменные объекты и добовлям их в props
let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth,
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);//HOC обёртка чтоб проверить зарегестрирован пользователь или нет
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);//Закидываем данные из URL
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

//Сокращаем запись вместо того что в верху написали это(это конвеер по оборачинию компонены в другии функции)
//это типа компонент пропускаешь через другие функции ,а в этих функциях что то происход с компонентом ,добовляется функционал, объекты
//Компонент ProfileContainer - оборачиваем сначало в withAuthRedirect, потом в withRouter, потом в connect(mapStateToProps, {getUserProfile})
export default compose(
	// withAuthRedirect,
	withRouter,
 connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
)(ProfileContainer);