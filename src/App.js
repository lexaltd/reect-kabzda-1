import React from 'react';
import logo from './logo.svg';
import './App.css';


import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header/>
				<Navbar/>
				<div className='app-wrapper-content'>
					<Route path='/profile' component={Dialogs}/>
					<Route path='/dialogs' component={Profile}/>
				</div>
			</div>
		</BrowserRouter>
	);
};


export default App;
