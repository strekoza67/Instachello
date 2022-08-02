import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Statistic from './ProfileInfo/Statistic/Statistic';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <div className={style.container}>
        <ProfileInfo profile={props.profile}/>
        <Statistic />
        <MyPostsContainer />
      </div>
    </div>
  )
}

export default Profile;