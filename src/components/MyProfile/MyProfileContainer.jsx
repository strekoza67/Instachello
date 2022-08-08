import { connect } from 'react-redux';
import { setUserProfile } from "../../redux/profile-reducer";
import React from 'react';
import MyProfile from './MyProfile';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';

class MyProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <MyProfile {...this.props} profile={this.props.profile} />
    )
  }
}


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default compose(
  connect(mapStateToProps, { setUserProfile }),
  withAuthRedirect
)(MyProfileContainer);