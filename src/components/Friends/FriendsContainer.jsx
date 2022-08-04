import { connect } from 'react-redux';
import { toggleFollowingProgress, follow, setCurrentPage, setFriends, setTotalUsersCount, toggleIsFetching, unfollow } from "../../redux/friends-reducer";
import React from 'react';
import Friends from './Friends';
import Preloader from '../common/Preloader/Preloader';
import { friendsAPI } from '../../api/api';

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    friendsAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setFriends(data.items);
        // this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    friendsAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setFriends(data.items)
      });
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
        toggleFollowingProgress={this.props.toggleFollowingProgress}
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
  { follow, unfollow, setFriends, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress })(FriendsContainer);