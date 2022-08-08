import ChatContainer from './Chat/ChatContainer';
import Dialogs from './Dialogs/Dialogs';
import style from './Messages.module.css';
import { Navigate } from 'react-router-dom';
import Messages from './Messages';

let AuthRedirectComponent = (props) => {
  let isAuth = props.store.getState().auth.isAuth;
  if(!isAuth ) {
    return <Navigate to={"/login"}/>;
  }
  return <Messages {...props} />;
}

export default AuthRedirectComponent;