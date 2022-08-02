const ADD_POST = "ADD-POST";
const UPPDATE_NEW_POST_TEXT = "UPPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: "Yulia_Chuvashaeva", message: "Hello bro!" },
    { id: "Pushok_Lapushok", message: "Serega my best friend, I love him!" },
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

export const addPostActionCreator = () => {
  return { type: ADD_POST }
}
export const uppdateNewPostTextActionCreator = (text) => {
  return { type: UPPDATE_NEW_POST_TEXT, newText: text }
}
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile }
}

export default profileReducer;