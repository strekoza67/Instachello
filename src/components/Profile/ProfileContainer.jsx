import { connect } from 'react-redux';
import { getUserProfile, addPost, uppdateNewPostText } from "../../redux/profile-reducer";
import React from 'react';
import Profile from './Profile';
import { useParams } from 'react-router-dom';

export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}

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
  }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { addPost, uppdateNewPostText, getUserProfile })(withUrlDataContainerComponent);