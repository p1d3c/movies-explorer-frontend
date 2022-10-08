import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import './SearchForm.css';

function SearchForm(props) {
  const {handleSearch, setIsPreloaderShown} = props;

  const [inputValue, setInputValue] = useState({search: ''});
  const location = useLocation();

  const handleChange = (evt) => {
    setInputValue({
      ...inputValue,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsPreloaderShown(true);
    handleSearch(inputValue.search);
  };

  useEffect(() => {
    if (location.pathname === '/movies') {
      const storageInputValue = JSON.parse(localStorage.getItem('searchData'));
      if (!storageInputValue) {
        return;
      }
      setInputValue({
        ...inputValue,
        search: storageInputValue.searchText,
      });
    }
  }, []);

  return (
    <div className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <input
          className='search__input'
          placeholder='Фильм'
          name='search'
          value={inputValue.search}
          onChange={handleChange}
          required
        />
        <button className='search__button'>Найти</button>
      </form>
    </div>
  );
}

export default SearchForm;
