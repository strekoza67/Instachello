import style from './TextMessage.module.css';

const TextMessage = (props) => {
  return (
    <div className={style.text__message}>
      <div className={style.text}>{props.text}</div>

    </div>
  )
}

export default TextMessage;