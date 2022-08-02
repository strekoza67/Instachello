import { connect } from 'react-redux';
import { setUserProfile } from "../../redux/profile-reducer";
import React from 'react';
import MyProfile from './MyProfile';
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
      <MyProfile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);