import React from 'react';
import {connect} from "react-redux";
import {
	follow,
	setCurrentPage,
	unfollow, toggleFollowingProgress, getUsers
} from "../../redux/users-reducer";
import * as axios from 'axios';//Импортируем всё что там находится в один объект axios
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

//Этот компонент нужен чтоб в нём выполнять AJAX запросы
class UsersContainer extends React.Component {
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount() {
		// this.props.toggleIsFetching(true);//Это для крутилки(включаем)
		//
		// usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
		// 		this.props.toggleIsFetching(false);//Это для крутилки(выключаем)
		// 		this.props.setUsers(data.items);
		// 		this.props.setTotalUsersCount(data.totalCount);
		// 	});
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		// this.props.setCurrentPage(pageNumber);
		// this.props.toggleIsFetching(true);//Это для крутилки
		//
		// usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
		// 		this.props.toggleIsFetching(false);//Это для крутилки
		// 		this.props.setUsers(data.items);
		// 	});
		this.props.setCurrentPage(pageNumber);//Чтоб выделялся жирным номер строки
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {//Возвращает JSX разметку
		return <>
			{this.props.isFetching ? <Preloader/> : null}{/*//Это крутилка*/}
			<Users totalUsersCount={this.props.totalUsersCount}
						 pageSize={this.props.pageSize}
						 currentPage={this.props.currentPage}
						 onPageChanged={this.onPageChanged}
						 users={this.props.users}
						 follow={this.props.follow}
						 unfollow={this.props.unfollow}
						 // toggleFollowingProgress={this.props.toggleFollowingProgress}
						 followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}

//--------------------------------------------------------------------------

let AuthRedirectComponent = withAuthRedirect(UsersContainer);//HOC обёртка чтоб проверить зарегестрирован пользователь или нет

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
};

//Этот компонент нужен чтоб прокинуть state(данные, состояние) и функции (dispatch) для работы со state
export default connect(mapStateToProps,
	// {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);
  {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })(AuthRedirectComponent);
// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId));
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollowAC(userId));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setCurrentPage: (pageNumber) => {
// 			dispatch(setCurrentPageAC(pageNumber))
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setUsersTotalCountAC(totalCount))
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching))
// 		},
// 	}
// };
//
// //Этот компонент нужен чтоб прокинуть state(данные, состояние) и функции (dispatch) для работы со state
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);