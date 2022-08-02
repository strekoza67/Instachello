import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MyProfileContainer from './components/MyProfile/MyProfileContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar className="sidebar" />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/myprofile/*" element={<MyProfileContainer/>} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<Messages store={props.store} />} />
            <Route path="/friends/*" element={<FriendsContainer store={props.store} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
