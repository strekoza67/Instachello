import { connect } from 'react-redux';
import { setUserProfile, addPost, uppdateNewPostText } from "../../redux/profile-reducer";
import React from 'react';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { profileAPI } from '../../api/api';

export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    profileAPI.getProfile(userId)
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

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { addPost, uppdateNewPostText, setUserProfile })(withUrlDataContainerComponent);