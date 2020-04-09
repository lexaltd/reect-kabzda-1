import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {Provider} from "react-redux";
// import {Provider} from "./StoreContext";


// let renderEntireTree = (state)=> {
// 	ReactDOM.render(
// 		<React.StrictMode>
// 			{/*<App posts={posts} dialogs={dialogs} messages={messages}/>*/}
// 			<App state={state} addPost={store.addPost.bind(store)}/>
// 		</React.StrictMode>,
// 		document.getElementById('root')
// 	);
// };
let renderEntireTree = ()=> {
	//debugger;
	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				{/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
				<App />
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);
};

renderEntireTree();

store.subscribe(()=>{
	// let state = store.getState();
	renderEntireTree();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
