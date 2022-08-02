import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Statistic from './ProfileInfo/Statistic/Statistic';
import Posts from './Posts/Posts';

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <div className={style.container}>
        <ProfileInfo profile={props.profile} />
        <Statistic />
        <Posts posts={props.posts}
          newPostText={props.newPostText}
          uppdateNewPostText={props.uppdateNewPostText}
          addPost={props.addPost}
          profile={props.profile} />
      </div>
    </div>
  )
}

export default Profile;