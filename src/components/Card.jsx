const Card = ({ className = "", width, height, children }) => {
  return (
    <div className={`card ${className}`} style={{ width, height }}>
      {children}
    </div>
  );
};
export default Card;
