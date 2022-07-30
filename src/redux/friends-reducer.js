const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET-FRIENDS";

let initialState = {
  friends: [],
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
      return {...state, friends: [...state.friends, ...action.friends]}
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


export default friendsReducer;