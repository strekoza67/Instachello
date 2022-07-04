import { React } from 'react';
import { addPostActionCreator, uppdateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../store-context';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {



  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = props.store.getState();

          let addPost = () => {
            props.store.dispatch(addPostActionCreator());
          }
          let onPostChange = (text) => {
            let action = uppdateNewPostTextActionCreator(text);
            props.store.dispatch(action);
          }

          return <MyPosts
            uppdateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />
        }

      }

    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;