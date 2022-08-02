import style from './MyProfile.module.css';
import MyProfileInfo from './MyProfileInfo/MyProfileInfo';
import MyStatistic from './MyProfileInfo/MyStatistic/Statistic';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const MyProfile = (props) => {
  return (
    <div className={style.profile}>
      <div className={style.container}>
        <MyProfileInfo profile={props.profile}/>
        <MyStatistic />
        <MyPostsContainer />
      </div>
    </div>
  )
}

export default MyProfile;