const ListItem = ({ id, label, checked, onChange, name }) => {
  return (
    <div className="list-item">
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label for={id}>{label}</label>
    </div>
  );
};
export default ListItem;
