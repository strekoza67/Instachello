import style from './User.module.css';
import yulia from '../../../images/yulia.jpg';

const User = () => {
  return (
    <div className={style.user__inner}>
      <div className={style.user}>
        <img src={yulia} alt="miniphoto" />
        <div className={style.user__descr}>
          <h3 className={style.user__name}> Yulia Chuvashaeva</h3>
          <div className={style.user__status}> is online</div>
        </div>
      </div>
      <div className={style.deleting}>Delete Conversation</div>

    </div>
  )
}

export default User;