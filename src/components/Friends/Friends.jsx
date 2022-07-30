import style from './Friends.module.css';

const Friends = (props) => {
  return (
    <div>
      {
        props.friends.map((friends, i) => {
          return <div key={i}>
            <span>
              <div>
                <img className={style} src={friends.photo} alt="miniphoto"/>
              </div>
              <div>
                {friends.followed 
                ? <button onClick = {() => {props.follow(friends.id)}}> Unfollow</button> 
                : <button onClick = {() => {props.unfollow(friends.id)}}> Follow</button>}
                
              </div>
            </span>
            <span>
              <span>
                <div>{friends.fullName}</div>
                <div>{friends.status}</div>
              </span>
              <span>
                <div>{friends.location.country}</div>
                <div>{friends.location.city}</div>
              </span>
            </span>
          </div>
        })
      }
    </div>
  )
}

export default Friends;