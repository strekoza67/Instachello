import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setFriendsAC, setTotalUsersCountAC, toggleIsFetchingAC, unfollowAC } from "../../redux/friends-reducer";
import axios from 'axios';
import React from 'react';
import Friends from './Friends';
import Preloader from '../common/Preloader/Preloader';

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        // this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
      });
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/>  : null}
      <Friends totalFriendsCount={this.props.totalFriendsCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        friends={this.props.friends}
        follow={this.props.follow}
        unfollow={this.props.unfollow} />
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
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (friendId) => {
      dispatch(followAC(friendId))
    },
    unfollow: (friendId) => {
      dispatch(unfollowAC(friendId))
    },
    setUsers: (friends) => {
      dispatch(setFriendsAC(friends))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);