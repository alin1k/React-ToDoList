import { useEffect, useState } from "react";
import Checkbox from "./Checkbox/Checkbox";
import "./List.css"
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function ListItem({index, item, deleteItemFromList, updateItemValue, updateItemCheckedValue, moveItemDownInTheList, moveItemUpInTheList}) {

  const { text , checked:checkedItem } = item;

  const [inputValue, setInputValue] = useState(text);
  const [checked, setChecked] = useState(checkedItem);

  useEffect(()=>{
    setInputValue(text);
  }, [text])

  useEffect(()=>{
    setChecked(checkedItem);
  }, [checkedItem])

  return (
    <div className="listItem">
      <Checkbox checked={checked} setChecked={setChecked} index={index} updateItemCheckedValue={updateItemCheckedValue} />
      
      <input
        className="listItemName" 
        value={inputValue}
        onChange={(e)=> {
          setInputValue(e.target.value)
          updateItemValue(index, e.target.value)
        }} 
        style={checked? {textDecoration: "line-through"} : {textDecoration: "none"}}
      />

      <KeyboardArrowUpIcon 
        className="actionButton" 
        onClick={()=>{moveItemUpInTheList(index)}}
      />
      <KeyboardArrowDownIcon 
        className="actionButton" 
        onClick={()=>{moveItemDownInTheList(index)}}
      />
      <RemoveIcon
        className="actionButton"
        onClick={()=>{deleteItemFromList(index)}}
      />
    </div>
  )
}

export default ListItem;