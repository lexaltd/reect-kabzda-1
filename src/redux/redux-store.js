// import {applyMiddleware, combineReducers, createStore} from "redux";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';//пакет для работы с формами
import appReducer from "./app-reducer";


let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,//пакет для работы с формами
	app: appReducer,
})

//------Было так--------------------------------------------------------------------------
//applyMiddleware(thunkMiddleware) - внедрям промежуточный слов в store
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));//applyMiddleware - чтоб можно было работать с redux-thunk
//
// window.store = store;
//--------------------------------------------------------------------------------------------------------------
//------Это сделали чтоб работало расширение Redux DevTools в Хроме(браузере)----------------------------------------
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;//Это можно и не писать
//------------------------------------------------------------------------------------
export default store;