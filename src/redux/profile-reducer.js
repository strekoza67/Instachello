import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPPDATE_NEW_POST_TEXT = "UPPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hello bro!" },
    { id: 2, message: "Serega my best friend, I love him!" },
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: "Yulia",
        message: state.newPostText,
      };
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost],
      };
    case UPPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    default:
      return state;
  }
}

export const addPost = () => ({ type: ADD_POST });
export const uppdateNewPostText = (newText) => ({ type: UPPDATE_NEW_POST_TEXT, newText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data));
      });
  }
}



export default profileReducer;