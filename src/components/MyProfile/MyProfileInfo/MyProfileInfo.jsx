import style from './MyProfileInfo.module.css';
import simplephoto from '../../../images/profile_img.jpg';
import Preloader from '../../common/Preloader/Preloader';

const MyProfileInfo = (props) => {

  if(!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={style.profile__info}>
      <a href="#">
        <img src={simplephoto} alt="simplephoto" />
      </a>
      <div className={style.profile__content}>
        <h1 className={style.name}>Serega Kozlov</h1>
        <p className={style.descr}>Serega оч крутой парень, добряк, всех любит и всем помогает, и всё у него получается, ну прям вообще всё!</p>
        <div className={style.hobbies}>Спорт, ИТ-сфера, приключения, сериалы, созерцание, Гарри Поттер</div>
        <div className={style.btns}>
          <button type='submit' className={style.add__btn}>Add Friend</button>
          <button type='submit' className={style.send__btn}>Send Message</button>
          <button className={style.menu__btn}></button>
        </div>
      </div>
    </div>
  )
}

export default MyProfileInfo;