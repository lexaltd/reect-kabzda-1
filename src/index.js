import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SamuraiJSApp from "./App";


// let renderEntireTree = (state)=> {
// 	ReactDOM.render(
// 		<React.StrictMode>
// 			{/*<App posts={posts} dialogs={dialogs} messages={messages}/>*/}
// 			<App state={state} addPost={store.addPost.bind(store)}/>
// 		</React.StrictMode>,
// 		document.getElementById('root')
// 	);
// };
//---------------------------------------------------------------------------
// let renderEntireTree = ()=> {
// 	//debugger;
// 	ReactDOM.render(
// 		<React.StrictMode>
// 			<Provider store={store}>
// 				{/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
// 				<App />
// 			</Provider>
// 		</React.StrictMode>,
// 		document.getElementById('root')
// 	);
// };
//
// renderEntireTree();

//connect из react-redux  - сам перерисовывает ,по этому store.subscribe(renderEntireTree()) нам не нужен теперь
// store.subscribe(()=>{
// 	// let state = store.getState();
// 	renderEntireTree();
// });

//-----------------------------------------------------------------------------------------
// ReactDOM.render(
// 	<React.StrictMode>
// 		<Provider store={store}>
// 			{/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
// 			<App />
// 		</Provider>
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

//------Было так--------------------------------------------------------------------------
// ReactDOM.render(
// 	<BrowserRouter>
// 		<Provider store={store}>
// 			{/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
// 			<App/>
// 		</Provider>
// 	</BrowserRouter>
// 	, document.getElementById('root')
// );
//---------------------------------------------------------------
//-----Стало так ,чтоб тесты отрабатывали--------------------------------------------------
ReactDOM.render(<SamuraiJSApp/>
	, document.getElementById('root')
);
//---------------------------------------------------------------------------
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
