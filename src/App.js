import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state, {addPost} from "./redux/state";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header/>
				<Navbar/>
				<div className='app-wrapper-content'>
					{/*//exact path='/dialogs' - чтоб переходил только по dialogs - и ни куда дальше*/}
					{/*//Route - перехватывает пути - url(path='/profile') и загружает нужный компонент(Dialogs)*/}
					{/*<Route path='/dialogs' component={Dialogs}/>*/}
					{/*<Route path='/profile' component={Profile}/>*/}

					<Route path='/dialogs' render={()=> <Dialogs
																										store={props.store}/>}/>
					<Route path='/profile' render={()=> <Profile
																										state={props.state.profilePage}
																										dispatch={props.dispatch}/>}/>
				</div>
			</div>
		</BrowserRouter>
	);
};


export default App;
