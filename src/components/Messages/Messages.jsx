import ChatContainer from './Chat/ChatContainer';
import Dialogs from './Dialogs/Dialogs';
import style from './Messages.module.css';
import Search from './Search/Search';
import User from './User/User';
import { Navigate } from 'react-router-dom';

const Messages = (props) => {

  return (
    <div className={style.messages}>
      <div className={style.container}>
        <h1 className={style.title}>Messages</h1>
        <div className={style.dialogs}>
          <Search />
          <User />
          <Dialogs messagesPage={props.store.getState().messagesPage} />
          <ChatContainer />
        </div>
      </div>
    </div>
  )
}

export default Messages;