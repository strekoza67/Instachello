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

export const addPost = () => {
  return { type: ADD_POST }
}
export const uppdateNewPostText = (newText) => {
  return { type: UPPDATE_NEW_POST_TEXT, newText }
}
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile }
}

export default profileReducer;