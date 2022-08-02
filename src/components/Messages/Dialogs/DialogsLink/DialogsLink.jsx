import style from './DialogsLink.module.css';
import { NavLink } from 'react-router-dom';

const DialogsLink = (props) => {
  return (
    <NavLink to={props.id} className={navData => navData.isActive ? style.active : style.dialogs__link} >
        <img className={style.photo} src={props.miniphoto} alt="miniphoto" />
      <div className={style.user__chat}>
        <h4 className={style.user__name}> {props.userName}</h4>
        <div className={style.text}>{props.text}</div>
      </div>

    </NavLink>
  )
}

export default DialogsLink;