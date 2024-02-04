import { useState, useRef } from "react";

export default function TicTacToe() {
  const [items, setItems] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const XORef = useRef("");
  const answers = [
    [items[0][0], items[0][1], items[0][2]],
    [items[3], items[6], items[9]],
    [items[1], items[4], items[7]],
    [items[7], items[5], items[3]],
    [items[1], items[5], items[9]],
    [items[7], items[8], items[9]],
  ];
  const handleBoxClick = (item, mainIdx, subId) => {
    XORef.current = XORef.current === "X" ? "O" : "X";
    setItems((prevItems) => {
      const mainArr = [...prevItems].map((mainArr, mainIds) =>
        mainIds === mainIdx
          ? prevItems[mainIdx].map((itemSub, id) =>
              id === subId ? XORef.current : itemSub
            )
          : mainArr
      );
      return mainArr;
    });
  };
  return (
    <div className="ttt-container">
      {items.map((itemArr, mainIdx) =>
        itemArr.map((item, subId) => (
          <button
            key={subId}
            className="Item"
            onClick={() => handleBoxClick(item, mainIdx, subId)}
            disabled={item.trim()}
            style={{ fontSize: "2rem" }}
          >
            {item}
          </button>
        ))
      )}
    </div>
  );
}
