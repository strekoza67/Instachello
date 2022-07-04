import style from './Search.module.css';

const Search = () => {
  return (
    <div className={style.search}>
      <input type="search" placeholder='Search' />
    </div>
  )
}

export default Search;