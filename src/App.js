import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import state, {addPost} from "./redux/store";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";

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

					{/*<Route path='/dialogs' render={()=><DialogsContainer store={props.store}/>}/>*/}
					{/*<Route path='/profile' render={()=><Profile store={props.store}/> }/>*/}

					<Route path='/dialogs' render={()=><DialogsContainer />}/>
					{/*<Route path='/profile' render={()=><Profile /> }/>*/}
					<Route path='/profile/:userId?' render={()=><ProfileContainer /> }/>{/*? знак даёт понять что :userId парамеир не обязательный*/}
					<Route path='/users' render={()=><UsersContainer /> }/>
				</div>
			</div>
		</BrowserRouter>
	);
};


export default App;
