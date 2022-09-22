import './SearchForm.css';

function SearchForm(props) {
  return (
    <div className='search'>
      <form className='search__form'>
        <input className='search__input' placeholder='Фильм' />
        <button className='search__button'>Найти</button>
      </form>
    </div>
  );
}

export default SearchForm;
