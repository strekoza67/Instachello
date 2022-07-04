import { sendMessageActionCreator, uppdateNewMessageTextActionCreator } from '../../../redux/messages-reducer';
import StoreContext from '../../../store-context';
import Chat from './Chat';

const ChatContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = props.store.getState();

          let sendMessage = () => {
            props.store.dispatch(sendMessageActionCreator());
          };
          let onMessageText = (text) => {
            let action = uppdateNewMessageTextActionCreator(text);
            props.store.dispatch(action);
          }
          return <Chat
            uppdateNewMessageText={onMessageText}
            sendMessage={sendMessage}
            messagesPage={state.messagesPage}
            newMessageText={state.messagesPage.newMessageText} />
        }
      }

    </StoreContext.Consumer>
  )
}
let mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.uppdateNewMessageText,
  }
}

let mapDispatchToProps = () => {
  return {
    newMessageText: () => { },
    sendMessage: () => { },
  }
}

const SuperMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;