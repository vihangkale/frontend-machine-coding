const CheckBox = ({ id, name, checked, label, onChange }) => {
  return (
    <div className="checkBox">
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
export default CheckBox;
