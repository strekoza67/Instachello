import style from './Statistic.module.css';

const Statistic = () => {
  return (
    <div className={style.statistic}>
      <div className={style.posts}><span> 120</span> Posts</div>
      <div className={style.followers}><span>430</span> Followers</div>
      <div className={style.following}><span>23</span> Following</div>
    </div>
  )
}

export default Statistic;