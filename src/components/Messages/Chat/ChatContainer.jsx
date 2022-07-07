import { connect } from 'react-redux';
import { sendMessageActionCreator, uppdateNewMessageTextActionCreator } from '../../../redux/messages-reducer';
import Chat from './Chat';

let mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    uppdateNewMessageText: (text) => {
      dispatch(uppdateNewMessageTextActionCreator(text))
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;