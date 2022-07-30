import style from './Sidebar.module.css';
import miniphoto from '../../images/mini_profile_img.jpg';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <img src={miniphoto} alt="miniphoto" />
      <nav>
        <ul className={style.menu}>
          <li className={style.menu__item}><NavLink to='/profile' className={navData => navData.isActive ? style.active : style.menu__item}>My Profile</NavLink></li>
          <li className={style.menu__item}><NavLink to='/messages' className={navData => navData.isActive ? style.active : style.menu__item}>Messages</NavLink></li>
          <li className={style.menu__item}><NavLink to='/friends' className={navData => navData.isActive ? style.active : style.menu__item}>Friends</NavLink></li>
          <li className={style.menu__item}><NavLink to='/feed' className={navData => navData.isActive ? style.active : style.menu__item}>Feed</NavLink></li>
          <li className={style.menu__item}><NavLink to='/explore' className={navData => navData.isActive ? style.active : style.menu__item}>Explore</NavLink></li>
          <li className={style.menu__item}><NavLink to='/tranding' className={navData => navData.isActive ? style.active : style.menu__item}>Tranding</NavLink></li>
          <li className={style.menu__item}><NavLink to='/marketplace' className={navData => navData.isActive ? style.active : style.menu__item}>Marketplace</NavLink></li>
          <li className={style.menu__item}><NavLink to='/settings' className={navData => navData.isActive ? style.active : style.menu__item}>Settings</NavLink></li>
          <li className={style.menu__item}><NavLink to='/logout' className={navData => navData.isActive ? style.active : style.menu__item}>Logout</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;