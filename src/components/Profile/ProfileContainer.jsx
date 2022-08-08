import { connect } from 'react-redux';
import { getUserProfile, addPost, uppdateNewPostText } from "../../redux/profile-reducer";
import React from 'react';
import Profile from './Profile';
import { Navigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../hoc/WithRouter';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    getUserProfile(userId);
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
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, { addPost, uppdateNewPostText, getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);