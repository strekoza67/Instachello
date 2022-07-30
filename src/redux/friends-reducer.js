import ekatOvch from '../images/ekat-ovch.jpg';
import yulia from '../images/yulia.jpg';
import alexey from '../images/alexey.jpg';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET-FRIENDS";

let initialState = {
  friends: [
    { id: 1, photo: yulia, followed: true, fullName: "Yulia Chuvashaeva", status: "I am director", location: {city: "Orenburg", country: "Russia"} },
    { id: 2, photo: ekatOvch, followed: false, fullName: "Ekaterina Ovcharenko", status: "I am yung mother", location: {city: "Orenburg", country: "Russia"} },
    { id: 3, photo: alexey, followed: true, fullName: "Alexey Ovcharenko", status: "I am Sadh Guru", location: {city: "Orenburg", country: "Russia"} },
  ],
};

const friendsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state, 
        friends: state.friends.map(friends => {
          if (friends === action.friendId) {
            return {...friends, followed: true}
          }
          return friends;
        }),
      };
        // friends: [...state.friends]  то же самое что вверху
    case UNFOLLOW:
      return {
        ...state,
        friends: state.friends.map(friends => {
          if (friends === action.friendId) {
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