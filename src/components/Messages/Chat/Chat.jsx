import style from './Chat.module.css';
import TextMessage from './TextMessage/TextMessage';

const Chat = (props) => {
  let messagesElements = props.messages.map((message, i) => {
    return <TextMessage key={i} text={message.text} />
  });

  let onSendMessage = () => {
    props.sendMessage();
  }
  let onMessageText = (e) => {
    let text = e.target.value;
    props.uppdateNewMessageText(text);
  }

  return (
    < div className={style.chat} >

      {messagesElements}

      <div className={style.chat__form}>
        <textarea onChange={onMessageText} value={props.newMessageText} className={style.sendMessage} placeholder="Your Message.."></textarea>
        <button onClick={onSendMessage} className={style.send__btn}>Send</button>
      </div>
    </div >

  )
}

export default Chat;