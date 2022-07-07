import ekatOvch from '../images/ekat-ovch.jpg';
import yulia from '../images/yulia.jpg';
import pushok from '../images/pushok.jpg';
import alexey from '../images/alexey.jpg';

const SEND_MESSAGE = "SEND-MESSAGE";
const UPPDATE_NEW_MESSAGE_TEXT = "UPPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: "Alexey_Ovcharenko",
        text: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage],
      };
    case UPPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    default:
      return state;
  }
}

export const sendMessageActionCreator = () => {
  return { type: SEND_MESSAGE }
}
export const uppdateNewMessageTextActionCreator = (text) => {
  return { type: UPPDATE_NEW_MESSAGE_TEXT, newText: text }
}

export default messagesReducer;