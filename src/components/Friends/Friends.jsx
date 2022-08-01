import style from './Friends.module.css';
import userPhoto from '../../images/user-img.png';
import axios from 'axios';
import React from 'react';

class Friends extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        // this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize) ;

    let pages = [];
    for (let i=1; i <= pagesCount;i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p, i) => {
            return <span onClick={() => {this.onPageChanged(p)}} 
            key={i} 
            className={this.props.currentPage === p ? style.selectedPage : style.simplePage}>{p}</span>
          })}
        </div>
        {
          this.props.friends.map((f, i) => {
            return <div key={i}>
              <span>
                <div>
                  <img className={style} src={f.photos.small != null ? f.photos.small : userPhoto} alt="miniphoto" />
                </div>
                <div>
                  {f.followed
                    ? <button onClick={() => { this.props.unfollow(f.id) }}> Unfollow</button>
                    : <button onClick={() => { this.props.follow(f.id) }}> Follow</button>}

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
}

export default Friends;