import style from './Dialogs.module.css';
import DialogsLink from './DialogsLink/DialogsLink';

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogs.map((dialog, i) => {
    return < DialogsLink key={i} miniphoto={dialog.photo} id={dialog.id} userName={dialog.name} text={props.text} />
  });

  return (
    <div className={style.dialogs__inner}>
      <div className={style.dialogs__item}>

        {dialogsElements}


      </div>
    </div>
  )
}

export default Dialogs;