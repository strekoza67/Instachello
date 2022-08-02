import style from './Posts.module.css';
import Post from './Post/Post';
import { React } from 'react';

const Posts = (props) => {
  let postsElements = props.posts.map((post, i) => {
    return <Post key={i} message={post.message} profile={props.profile}/>
  });

  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = (e) => {
    let text = e.target.value;
    props.uppdateNewPostText(text);
  }

  return (
    <div className={style.myPosts}>
      <div className={style.myPosts__form}>
        <textarea value={props.newPostText} onChange={onPostChange} placeholder="Post.." />
        <button onClick={onAddPost} className={style.myPosts__btn}>Add Post</button>
      </div>

      {postsElements}

    </div>
  )
}

export default Posts;