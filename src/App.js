import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MyProfileContainer from './components/MyProfile/MyProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Sidebar className="sidebar" />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/myprofile/*" element={<MyProfileContainer/>} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<Messages store={props.store} />} />
            <Route path="/friends/*" element={<FriendsContainer store={props.store} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
