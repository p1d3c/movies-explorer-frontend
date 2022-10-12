import './FilterCheckbox.css';

function FilterCheckbox(props) {
  const {isShort, setIsShort} = props;

  return (
    <div className='filter__wrap'>
      <label className='filter__label'>
        <input className='filter__checkbox' type='checkbox' checked={isShort} onChange={() => setIsShort(!isShort)} />
        <span className='filter__switch'></span>
      </label>
      <span className='filter__span'>Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
