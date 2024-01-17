const TranferButtons = ({
  onClickLeft,
  onClickRight,
  leftText,
  rightText,
  leftDisabled,
  rightDisabled,
}) => {
  return (
    <div className="transfer-buttons">
      <button onClick={onClickLeft} disabled={leftDisabled}>
        {leftText}
      </button>
      <button onClick={onClickRight} disabled={rightDisabled}>
        {rightText}
      </button>
    </div>
  );
};
export default TranferButtons;
