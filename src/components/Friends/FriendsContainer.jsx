import { connect } from 'react-redux';
import { getUsers, toggleFollowingProgress, follow, unfollow, setCurrentPage } from "../../redux/friends-reducer";
import React from 'react';
import Friends from './Friends';
import Preloader from '../common/Preloader/Preloader';

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Friends totalFriendsCount={this.props.totalFriendsCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        friends={this.props.friends}
        follow={this.props.follow}
        unfollow={this.props.unfollow} 
        followingProgress={this.props.followingProgress} />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    pageSize: state.friendsPage.pageSize,
    totalFriendsCount: state.friendsPage.totalFriendsCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    followingProgress: state.friendsPage.followingProgress,
  }
}

export default connect(mapStateToProps,
  { follow, unfollow, setCurrentPage, 
    toggleFollowingProgress, getUsers})(FriendsContainer);