import ekatOvch from '../images/ekat-ovch.jpg';
import yulia from '../images/yulia.jpg';
import pushok from '../images/pushok.jpg';
import alexey from '../images/alexey.jpg';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "Yulia_Chuvashaeva", message: "Hello bro!" },
        { id: "Pushok_Lapushok", message: "Serega my best friend, I love him!" },
      ],
      newPostText: '',
    },
    messagesPage: {
      messages: [
        { id: "Yulia_Chuvashaeva", text: "Привет, дорогой!" },
        { id: "Pushok_Lapushok", text: "Как твои дела?" },
        { id: "Ekaterina_Ovcharenko", text: "Я абъюзерша ;-)" },
      ],
      dialogs: [
        { photo: yulia, id: "Yulia_Chuvashaeva", name: "Yulia Chuvashaeva" },
        { photo: pushok, id: "Pushok_Lapushok", name: "Pushok Lapushok" },
        { photo: ekatOvch, id: "Ekaterina_Ovcharenko", name: "Ekaterina Ovcharenko" },
        { photo: alexey, id: "Alexey_Ovcharenko", name: "Alexey Ovcharenko" },
      ],
      newMessageText: '',
    },
  },
  _callSubscriber() {
    console.log(this._state.profilePage.newPostText);
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

    this._callSubscriber();
  }
}

window.store = store;

export default store;
