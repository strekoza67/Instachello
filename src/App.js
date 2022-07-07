import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar className="sidebar" />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages/*" element={<Messages store={props.store} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
