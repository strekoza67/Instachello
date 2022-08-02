import { addPost, uppdateNewPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    uppdateNewPostText: (text) => {
      dispatch(uppdateNewPostText(text));
    },
    addPost: () => {
      dispatch(addPost());
    },
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;