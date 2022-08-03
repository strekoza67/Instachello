import style from './Header.module.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.header__left}>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <button className={style.theme__btn}></button>
      </div>
      <div className={style.header__right}>
        <input type="search" placeholder="Search.." className={style.header__search} />
        <div className={style.loginBlock}>

          {props.isAuth ? props.login : <NavLink to={'/login'}><button className={style.upload}>Log In</button></NavLink>}
          
          <button className={style.upload}>Upload</button>
          <button className={style.upload}></button>
          <button className={style.upload}></button>
        </div>
      </div>
    </header>
  )
}

export default Header;