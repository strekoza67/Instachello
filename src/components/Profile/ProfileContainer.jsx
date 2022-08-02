import { connect } from 'react-redux';
import { setUserProfile, addPost, uppdateNewPostText } from "../../redux/profile-reducer";
import React from 'react';
import Profile from './Profile';
import axios from 'axios';

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

export default connect(mapStateToProps, { addPost, uppdateNewPostText, setUserProfile })(ProfileContainer);