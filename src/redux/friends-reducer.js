const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET-FRIENDS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  friends: [],
  pageSize: 4,
  totalFriendsCount: 11,
  currentPage: 1,
  isFetching: false,
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
    default:
      return state;
  }
}

export const follow = (friendId) => {
  return { type: FOLLOW, friendId };
};

export const unfollow = (friendId) => {
  return { type: UNFOLLOW, friendId };
};

export const setFriends = (friends) => {
  return { type: SET_FRIENDS, friends };
}

export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
}
export const setTotalUsersCount = (totalCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalCount };
}
export const toggleIsFetching = (isFetching) => {
  return {type: TOGGLE_IS_FETCHING, isFetching}
}


export default friendsReducer;