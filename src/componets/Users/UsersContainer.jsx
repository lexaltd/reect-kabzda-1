import React from 'react';
import {connect} from "react-redux";
import {
	follow,
	setCurrentPage,
	unfollow, toggleFollowingProgress, requestUsers
} from "../../redux/users-reducer";
import * as axios from 'axios';//Импортируем всё что там находится в один объект axios
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

//Этот компонент нужен чтоб в нём выполнять AJAX запросы
class UsersContainer extends React.Component {
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount() {
		// this.props.toggleIsFetching(true);//Это для крутилки(включаем)
		//
		// usersAPI.requestUsers(this.props.currentPage, this.props.pageSize).then(data => {
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
		// usersAPI.requestUsers(pageNumber, this.props.pageSize).then(data => {
		// 		this.props.toggleIsFetching(false);//Это для крутилки
		// 		this.props.setUsers(data.items);
		// 	});
		this.props.setCurrentPage(pageNumber);//Чтоб выделялся жирным номер строки
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {//Возвращает JSX разметку
		console.log('render Users');
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
// let mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress,
// 	}
// };
let mapStateToProps = (state) => {
	console.log('mapStateToProps Users');
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

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


// let AuthRedirectComponent = withAuthRedirect(UsersContainer);//HOC обёртка чтоб проверить зарегестрирован пользователь или нет
//Этот компонент нужен чтоб прокинуть state(данные, состояние) и функции (dispatch) для работы со state
// export default connect(mapStateToProps,
// 	// {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);
// 	{follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers })(AuthRedirectComponent);

//Сокращаем запись вместо того что в верху написали это(это конвеер по оборачинию компонены в другии функции)
//это типа компонент пропускаешь через другие функции ,а в этих функциях что то происход с компонентом ,добовляется функционал, объекты
//Компонент UsersContainer - оборачиваем сначало в withAuthRedirect, потом в connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers })
export default compose(
	// withAuthRedirect,
	connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers })
)(UsersContainer)