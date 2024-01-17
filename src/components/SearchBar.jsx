const SearchBar = ({
  id,
  name,
  onChange,
  onClickAdd,
  btnText,
  value,
  btnDisabled,
}) => {
  return (
    <div className="search-bar">
      <input
        name={name}
        type="search"
        id={id}
        onChange={onChange}
        value={value}
      />
      <button onClick={onClickAdd} disabled={btnDisabled}>
        {btnText}
      </button>
    </div>
  );
};
export default SearchBar;
