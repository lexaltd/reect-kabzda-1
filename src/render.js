import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import state from './redux/state';
import {addPost} from './redux/state';


export let renderEntireTree = (state)=> {
	ReactDOM.render(
		<React.StrictMode>
			{/*<App posts={posts} dialogs={dialogs} messages={messages}/>*/}
			<App state={state} addPost={addPost}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
};
