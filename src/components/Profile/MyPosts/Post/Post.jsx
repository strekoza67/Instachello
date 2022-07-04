import style from './Post.module.css';
import simplephoto from '../../../../images/profile_img.jpg';

const Post = (props) => {
  return (
    <div className={style.post}>
      <img src={simplephoto} alt="photo" />
      <p className={style.post__text}>{props.message}</p>
    </div>
  )
}

export default Post;