import { connect } from 'react-redux';
import { follow, setCurrentPage, setFriends, setTotalUsersCount, toggleIsFetching, unfollow } from "../../redux/friends-reducer";
import axios from 'axios';
import React from 'react';
import Friends from './Friends';
import Preloader from '../common/Preloader/Preloader';
import { getUsers } from '../../api/api';

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    getUsers().then(response => {
        this.props.toggleIsFetching(false);
        this.props.setFriends(response.data.items);
        // this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      withCredentials: true,
    })
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setFriends(response.data.items)
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

export default connect(mapStateToProps,
   { follow, unfollow, setFriends, setCurrentPage, setTotalUsersCount, toggleIsFetching, })(FriendsContainer);