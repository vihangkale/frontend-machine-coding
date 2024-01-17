import ListItem from "./ListItem";
const List = ({ list, type, onChangeList, getFilteredList }) => {
  const filterList = (type, onChange) => {
    const filteredList = getFilteredList(list, type).map(
      ({ id, label, checked }) => (
        <ListItem
          id={id}
          name={type}
          label={label}
          checked={checked}
          onChange={(e) => onChange(e, id, type)}
        />
      )
    );
    return filteredList;
  };
  return (
    <div className="list">
      {list?.length > 0 && filterList(type, onChangeList)}
    </div>
  );
};
export default List;
