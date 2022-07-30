import style from './Friends.module.css';
import ekatOvch from '../../images/ekat-ovch.jpg';
import yulia from '../../images/yulia.jpg';
import alexey from '../../images/alexey.jpg';

const Friends = (props) => {

  if (props.friends.length === 0) {
    props.setUsers([
      { id: 1, photo: yulia, followed: true, fullName: "Yulia Chuvashaeva", status: "I am director", location: { city: "Orenburg", country: "Russia" } },
      { id: 2, photo: ekatOvch, followed: false, fullName: "Ekaterina Ovcharenko", status: "I am yung mother", location: { city: "Orenburg", country: "Russia" } },
      { id: 3, photo: alexey, followed: true, fullName: "Alexey Ovcharenko", status: "I am Sadh Guru", location: { city: "Orenburg", country: "Russia" } }
    ])
  }

  return (
    <div>
      {
        props.friends.map((f, i) => {
          return <div key={i}>
            <span>
              <div>
                <img className={style} src={f.photo} alt="miniphoto" />
              </div>
              <div>
                {f.followed
                  ? <button onClick={() => { props.unfollow(f.id) }}> Unfollow</button>
                  : <button onClick={() => { props.follow(f.id) }}> Follow</button>}

              </div>
            </span>
            <span>
              <span>
                <div>{f.fullName}</div>
                <div>{f.status}</div>
              </span>
              <span>
                <div>{f.location.country}</div>
                <div>{f.location.city}</div>
              </span>
            </span>
          </div>
        })
      }
    </div>
  )
}

export default Friends;