import { useState, useRef, useEffect } from "react";

export default function TicTacToe() {
  const initialItemsState = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  const [items, setItems] = useState(initialItemsState);
  const XORef = useRef("");
  const options = {
    x: "X",
    o: "O",
  };
  const answers = [
    [items[0][0], items[0][1], items[0][2]],
    [items[1][0], items[1][1], items[1][2]],
    [items[2][0], items[2][1], items[2][2]],
    [items[0][0], items[1][0], items[2][0]],
    [items[0][1], items[1][1], items[2][1]],
    [items[0][2], items[1][2], items[2][2]],
    [items[0][0], items[1][1], items[2][2]],
    [items[0][2], items[1][1], items[2][0]],
  ];
  useEffect(() => {
    let isWin = false;
    const isNotEmpty = items.some(
      (itemArr) => itemArr.includes(options.x) || itemArr.includes(options.o)
    );

    if (isNotEmpty) {
      isWin = answers.some(
        (itemArr) =>
          itemArr.every((item) => item === options.x) ||
          itemArr.every((item) => item === options.o)
      );
    }
    console.log(isWin, "is winn");
    if (isWin) {
      const favDialog = document.getElementById("favDialog");
      favDialog.showModal();
    }
  }, [items]);
  const handleBoxClick = (item, mainIdx, subId) => {
    XORef.current = XORef.current === options.x ? options.o : options.x;
    setItems((prevItems) => {
      const mainArr = [...prevItems].map((mainArr, mainIds) => {
        const subArrUpdate =
          mainIds === mainIdx
            ? prevItems[mainIdx].map((itemSub, id) =>
                id === subId ? XORef.current : itemSub
              )
            : mainArr;

        return subArrUpdate;
      });
      return mainArr;
    });
  };
  const handleResetClick = () => {
    setItems(initialItemsState);
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
            style={{ fontSize: "2rem", color: "black" }}
          >
            {item}
          </button>
        ))
      )}
      <dialog id="favDialog">
        <form method="dialog">
          <h6>{`${XORef.current} Wins!!!!!`} </h6>
          <button onClick={handleResetClick}>Okay reset</button>
        </form>
      </dialog>
    </div>
  );
}
