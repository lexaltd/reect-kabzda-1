import React from 'react';
import {connect} from "react-redux";
import {
	follow,
	setCurrentPage,
	setUsers,
	setTotalUsersCount,
	toggleIsFetching,
	unfollow
} from "../../redux/users-reducer";
import * as axios from 'axios';//Импортируем всё что там находится в один объект axios
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

//Этот компонент нужен чтоб в нём выполнять AJAX запросы
class UsersContainer extends React.Component {
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount() {
		this.props.toggleIsFetching(true);//Это для крутилки
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
			{withCredentials: true,})
			.then(response => {
				this.props.toggleIsFetching(false);//Это для крутилки
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);//Это для крутилки
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
			{withCredentials: true,})
			.then(response => {
				this.props.toggleIsFetching(false);//Это для крутилки
				this.props.setUsers(response.data.items);
			});
	}

	render() {//Возвращает JSX разметку
		return <>
			{this.props.isFetching ? <Preloader/> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
						 pageSize={this.props.pageSize}
						 currentPage={this.props.currentPage}
						 onPageChanged={this.onPageChanged}
						 users={this.props.users}
						 follow={this.props.follow}
						 unfollow={this.props.unfollow}
			/>
		</>
	}
}

//--------------------------------------------------------------------------

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
};

//Этот компонент нужен чтоб прокинуть state(данные, состояние) и функции (dispatch) для работы со state
export default connect(mapStateToProps,
	{follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);

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