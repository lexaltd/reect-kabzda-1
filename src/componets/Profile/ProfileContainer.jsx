import React from 'react';
import Profile from "./Profile";
import * as axios from "axios/index";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
	// constructor(props){
	// 	super(props);
	// }

	// вызывается сразу после монтирования (то есть, вставки компонента в DOM). В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
		// 	.then(response => {
		// 		this.props.setUserProfile(response.data);
		// 	});
		this.props.getUserProfile(userId);
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		);
	};
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
});

// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(ProfileContainer);//Закидываем данные из URL

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);