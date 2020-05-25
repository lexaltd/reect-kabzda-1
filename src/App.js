import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
// import {HashRouter} from "react-router-dom";//нужен чтоб работал - GitHub Pages, в нормальных условиях используют BrowserRouter
import state, {addPost} from "./redux/store";
import UsersContainer from "./componets/Users/UsersContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import LoginPage from "./componets/Login/Login";
import Preloader from "./componets/common/Preloader/Preloader";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import {connect, Provider} from "react-redux";
import {withSuspense} from "./hoc/withSuspense";//для ленивой загрузки React.lazy

// import DialogsContainer from "./componets/Dialogs/DialogsContainer";
// import ProfileContainer from "./componets/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import('./componets/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./componets/Profile/ProfileContainer'));


// const App = (props) => {
class App extends Component {
	catchAllUnhandledErrors = (reason, promise) => {
		alert("Some error occured");
		console.error("Это моя: ",promise, reason);
		console.warn("Внимание: Необработанная ошибка Promise. Позор вам! Причина: " + reason);
	}

	componentDidMount() {
		this.props.initializeApp();
		//Событие unhandledrejection происходит, когда Promise завершен с ошибкой, но на данную ошибку не установлен обработчик.
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);//Добовляем обработчик события для всех Promise завершонных с ошибкой
	}

	componentWillUnmount() {//Вызовется когда компонента будет демонтирована
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);//Удалям обработчик события ,если добали то надо удалить
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}

		return (
			<div className='app-wrapper'>
				<HeaderContainer/>
				<Navbar/>
				<div className='app-wrapper-content'>
					<Switch>
						{/*//exact path='/dialogs' - чтоб переходил только по dialogs - и ни куда дальше*/}
						{/*//Route - перехватывает пути - url(path='/profile') и загружает нужный компонент(Dialogs)*/}
						{/*<Route path='/dialogs' component={Dialogs}/>*/}
						{/*<Route path='/profile' component={Profile}/>*/}

						{/*<Route path='/dialogs' render={()=><DialogsContainer store={props.store}/>}/>*/}
						{/*<Route path='/profile' render={()=><Profile store={props.store}/> }/>*/}

						<Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>

						{/*<Route path='/dialogs' render={() => <DialogsContainer/>}/>*/}
						<Route path='/dialogs' render={withSuspense(DialogsContainer)}/>

						{/*<Route path='/profile' render={()=><Profile /> }/>*/}
						<Route path='/profile/:userId?'
									 render={withSuspense(ProfileContainer)}/>{/*? знак даёт понять что :userId парамеир не обязательный*/}

						<Route path='/users' render={() => <UsersContainer/>}/>
						<Route path='/login' render={() => <LoginPage/>}/>
						<Route path='*' render={() => <div>404 NOT FOUND</div>}/>
					</Switch>
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

//------Было так--------------------------------------------------------------------------
// export default compose(//compose - метод чтоб сделать обёртки проще)
// 	withRouter,////Закидываем данные из URL(здесь оборочиваем ,потому что Route здесь начинает не коректно работать ,типа баг)
// 	connect(mapStateToProps, {initializeApp}))(App);
//---------------------------------------------------------------
//-----Стало так ,чтоб тесты отрабатывали--------------------------------------------------
let AppContainer = compose(//compose - метод чтоб сделать обёртки проще)
	withRouter,////Закидываем данные из URL(здесь оборочиваем ,потому что Route здесь начинает не коректно работать ,типа баг)
	connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
	return (

		<BrowserRouter>
			{/*<HashRouter >*/}
			<Provider store={store}>
				<AppContainer/>
			</Provider>
			{/*</HashRouter>*/}
		</BrowserRouter>

	)
}

export default SamuraiJSApp;
//---------------------------------------------------------------