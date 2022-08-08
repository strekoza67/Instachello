import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MyProfileContainer from './components/MyProfile/MyProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import AuthRedirectComponent from './components/Messages/MessagesContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Sidebar className="sidebar" />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/myprofile/*" element={<MyProfileContainer/>} />
            <Route path="/profile/:userId?/" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<AuthRedirectComponent store={props.store} />} />
            <Route path="/friends/*" element={<FriendsContainer store={props.store} />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
