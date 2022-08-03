import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.post}>
      <img src={null} alt="photo" />
      <p className={style.post__text}>{props.message}</p>
    </div>
  )
}

export default Post;