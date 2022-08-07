import { friendsAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET-FRIENDS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
  friends: [],
  pageSize: 4,
  totalFriendsCount: 11,
  currentPage: 1,
  isFetching: false,
  followingProgress: [],
};

const friendsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        friends: state.friends.map(friends => {
          if (friends.id === action.friendId) {
            return { ...friends, followed: true }
          }
          return friends;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        friends: state.friends.map(friends => {
          if (friends.id === action.friendId) {
            return { ...friends, followed: false }
          }
          return friends;
        })
      }
    case SET_FRIENDS:
      return { ...state, friends: action.friends }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalFriendsCount: action.totalCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}

export const followSuccess = (friendId) => ({ type: FOLLOW, friendId });
export const unfollowSuccess = (friendId) => ({ type: UNFOLLOW, friendId });
export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {

  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    friendsAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setFriends(data.items));
        // dispatch(setTotalUsersCount(data.totalCount));
      });
  }
}

export const unfollow = (userId) => {

  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    friendsAPI.unfollowUser(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  }
}
export const follow = (userId) => {

  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    friendsAPI.followUser(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  }
}

export default friendsReducer;