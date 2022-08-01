import Friends from "./Friends";
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setFriendsAC, setTotalUsersCountAC, unfollowAC } from "../../redux/friends-reducer";

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    pageSize: state.friendsPage.pageSize,
    totalFriendsCount: state.friendsPage.totalFriendsCount,
    currentPage: state.friendsPage.currentPage,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);