import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// const DialogsContainer = () => {
// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				(store) => {
// 					let state = store.getState().dialogsPage;
//
// 					let onSendMessageClick = () => {
// 						store.dispatch(sendMessageCreator());
// 					}
//
// 					let onNewMessageChange = (body) => {
// 						store.dispatch(updateNewMessageBodyCreator(body));
// 					}
//
// 					return (
// 						<Dialogs sendMessage={onSendMessageClick}
// 										 updateNewMessageBody={onNewMessageChange}
// 										 dialogsPage={state}/>
// 					)
// 				}
// 			}
// 		</StoreContext.Consumer>
// 	);
// };

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
		sendMessage: () => {
			dispatch(sendMessageCreator());
		}
	}
};

// let AuthRedirectComponent = withAuthRedirect(Dialogs);//HOC обёртка чтоб проверить зарегестрирован пользователь или нет
// //connect - делает то что мы делали в (выше закоментировано) const DialogsContainer = () => {
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

//Сокращаем запись вместо того что в верху написали это
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);