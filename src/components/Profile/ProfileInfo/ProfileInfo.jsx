import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={style.profile__info}>
      <a href="#">
        <img src={props.profile.photos.large} alt="simplephoto" />
      </a>
      <div className={style.profile__content}>
        <h1 className={style.name}>{props.profile.fullName}</h1>
        <p className={style.descr}>{props.profile.aboutMe}</p>
        <div className={style.hobbies}></div>
        <div className={style.btns}>
          <button type='submit' className={style.add__btn}>Add Friend</button>
          <button type='submit' className={style.send__btn}>Send Message</button>
          <button className={style.menu__btn}></button>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;