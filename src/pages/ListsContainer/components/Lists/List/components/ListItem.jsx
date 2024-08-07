import { useEffect, useState } from "react";
import Checkbox from "./Checkbox/Checkbox";
import "../List.css"
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from "react-redux";
import { deleteListItem, moveListItemDown, moveListItemUp, updateListItemText } from "../../../../../../redux/lists/listsSlice.js";


function ListItem({listIndex, index: itemIndex}) {

  const text = useSelector(state=> state.lists[listIndex].items[itemIndex].text)
  const checked = useSelector(state=> state.lists[listIndex].items[itemIndex].checked)
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(text);

  useEffect(()=>{
    setInputValue(text);
  }, [text])

  return (
    <div className="listItem">
      <Checkbox 
        itemIndex={itemIndex} 
        listIndex={listIndex}
      />
      
      <input
        className="listItemName" 
        name="list-item"
        autoComplete="off"
        value={inputValue}
        placeholder="Type your ideea here"
        onChange={(e)=> {
          setInputValue(e.target.value)
          dispatch(updateListItemText({listIndex: listIndex, itemIndex: itemIndex, newText: e.target.value}))
        }} 
        style={checked ? {textDecoration: "line-through"} : {textDecoration: "none"}}
      />

      <KeyboardArrowUpIcon 
        className="actionButton" 
        onClick={()=>{dispatch(moveListItemUp({listIndex: listIndex, itemIndex: itemIndex}))}}
      />
      <KeyboardArrowDownIcon 
        className="actionButton" 
        onClick={()=>{dispatch(moveListItemDown({listIndex: listIndex, itemIndex: itemIndex}))}}
      />
      <RemoveIcon
        className="actionButton"
        onClick={()=>{dispatch(deleteListItem({listIndex: listIndex, itemIndex: itemIndex}))}}
      />
    </div>
  )
}

export default ListItem;