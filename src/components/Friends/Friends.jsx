import style from './Friends.module.css';
import userPhoto from '../../images/user-img.png';
import { NavLink } from 'react-router-dom';

let Friends = (props) => {
  let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p, i) => {
          return <span onClick={() => { props.onPageChanged(p) }}
            key={i}
            className={props.currentPage === p ? style.selectedPage : style.simplePage}>{p}</span>
        })}
      </div>
      {
        props.friends.map((f, i) => {
          return <div key={i}>
            <span>
              <div>
                <NavLink to={'/profile/' + f.id}>
                  <img className={style.userPhoto} src={f.photos.small != null ? f.photos.small : userPhoto} alt="miniphoto" />
                </NavLink>
              </div>
              <div>
                {f.followed
                  ? <button disabled={props.followingProgress.some(id => id === f.id)} onClick={() => {

                    props.unfollow(f.id);

                  }}> Unfollow</button>
                  : <button disabled={props.followingProgress.some(id => id === f.id)} onClick={() => {

                    props.follow(f.id);

                  }}> Follow</button>}

              </div>
            </span>
            <span>
              <span>
                <div>{f.name}</div>
                <div>{f.status}</div>
              </span>
              <span>
                <div>{"f.location.country"}</div>
                <div>{"f.location.city"}</div>
              </span>
            </span>
          </div>
        })
      }
    </div>
  )
}

export default Friends;