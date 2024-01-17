import { useState } from "react";
import Card from "./Card";
import TranferButtons from "./TransferButtons";
import SearchBar from "./SearchBar";
import CheckBox from "./Checkbox";
import { listTypeString } from "../constants";
import List from "./List";
const TransferList = () => {
  const [list, setList] = useState([]);
  const [searchWord, setSearchWord] = useState({
    leftSearch: "",
    rightSearch: "",
  });
  const transferClick = (type) => {
    setList((prevList) =>
      prevList.map((prevObj) =>
        prevObj.checked && prevObj.listType === type
          ? {
              ...prevObj,
              listType:
                prevObj.listType === listTypeString.left
                  ? listTypeString.right
                  : listTypeString.left,
            }
          : prevObj
      )
    );
  };
  const handleSearchOnchange = (e) => {
    const { name, value } = e.target;
    setSearchWord((prevObj) => ({ ...prevObj, [name]: value }));
  };
  const onChangeList = (e, id) => {
    const { checked } = e.target;
    setList((prevList) =>
      prevList.map((prevObj) =>
        id === prevObj.id ? { ...prevObj, checked: checked } : prevObj
      )
    );
  };
  const getFilteredList = (list, type) =>
    list.filter(({ listType }) => listType === type);

  const handleAddOnClick = (type) => {
    const addObj = {
      id: Math.random(2),
      label: searchWord[type],
      checked: false,
      listType: type,
    };
    setList((prevList) => [...prevList, addObj]);
    setSearchWord((prevObj) => ({ ...prevObj, [type]: "" }));
  };
  const selectAllOnChange = (e, type) => {
    const { checked } = e.target;
    setList((prevList) =>
      prevList.map((prevObj) =>
        prevObj.listType === type ? { ...prevObj, checked: checked } : prevObj
      )
    );
  };
  const getSelectAllvalue = (type) => {
    const filteredList = getFilteredList(list, type);
    const isSelectedAll =
      filteredList.length > 0 && filteredList.every(({ checked }) => checked);
    return isSelectedAll;
  };
  const getTranferButtonDisabled = (type) => {
    const filteredList = getFilteredList(list, type);
    const isTransferButtonDisabled =
      filteredList.length === 0 ||
      (filteredList.length > 0 &&
        filteredList.every(({ checked }) => !checked));
    return isTransferButtonDisabled;
  };

  return (
    <div className="container">
      <Card className="leftCard" width={500} height={600}>
        <SearchBar
          onChange={handleSearchOnchange}
          onClickAdd={() => handleAddOnClick(listTypeString.left)}
          btnDisabled={!searchWord?.leftSearch?.trim()}
          btnText="Add"
          name="leftSearch"
          value={searchWord?.leftSearch}
        />
        <CheckBox
          name={listTypeString.left}
          checked={getSelectAllvalue(listTypeString.left)}
          label="Select All"
          onChange={(e) => selectAllOnChange(e, listTypeString.left)}
        />
        <List
          list={list}
          type={listTypeString.left}
          onChangeList={onChangeList}
          getFilteredList={getFilteredList}
        />
      </Card>
      <Card width={200} height={600}>
        <TranferButtons
          onClickLeft={() => transferClick(listTypeString.left)}
          leftDisabled={getTranferButtonDisabled(listTypeString.left)}
          rightDisabled={getTranferButtonDisabled(listTypeString.right)}
          onClickRight={() => transferClick(listTypeString.right)}
          leftText="&#8594;"
          rightText="&#8592;"
        />
      </Card>
      <Card className="rightCard" width={500} height={600}>
        <SearchBar
          onChange={handleSearchOnchange}
          onClickAdd={() => handleAddOnClick(listTypeString.right)}
          btnText="Add"
          name="rightSearch"
          value={searchWord?.rightSearch}
          btnDisabled={!searchWord?.rightSearch?.trim()}
        />
        <CheckBox
          name={listTypeString.right}
          checked={getSelectAllvalue(listTypeString.right)}
          label="Select All"
          onChange={(e) => selectAllOnChange(e, listTypeString.right)}
        />
        <List
          list={list}
          type={listTypeString.right}
          onChangeList={onChangeList}
          getFilteredList={getFilteredList}
        />
      </Card>
    </div>
  );
};
export default TransferList;
