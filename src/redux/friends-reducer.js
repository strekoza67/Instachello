const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET-FRIENDS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";

let initialState = {
  friends: [],
  pageSize: 4,
  totalFriendsCount: 11,
  currentPage: 1,
};

const friendsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state, 
        friends: state.friends.map(friends => {
          if (friends.id === action.friendId) {
            return {...friends, followed: true}
          }
          return friends;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        friends: state.friends.map(friends => {
          if (friends.id === action.friendId) {
            return {...friends, followed: false}
          }
          return friends;
        })
      }
    case SET_FRIENDS:
      return {...state, friends: action.friends}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalFriendsCount: action.totalCount}
    default:
      return state;
  }
}

export const followAC = (friendId) => {
  return {type: FOLLOW, friendId};
};

export const unfollowAC = (friendId) => {
  return {type: UNFOLLOW, friendId};
};

export const setFriendsAC = (friends) => {
  return {type: SET_FRIENDS, friends};
}

export const setCurrentPageAC = (currentPage) => {
  return {type: SET_CURRENT_PAGE, currentPage};
}
export const setTotalUsersCountAC = (totalCount) => {
  return {type: SET_TOTAL_USERS_COUNT, totalCount};
}


export default friendsReducer;