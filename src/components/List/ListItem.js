import { useEffect, useState } from "react";
import Checkbox from "./Checkbox/Checkbox";
import "./List.css"
import DeleteIcon from '@mui/icons-material/Delete';

function ListItem({index, value, deleteItemFromList, updateItemValue}) {
  const [inputValue, setInputValue] = useState(value);
  const [checked, setChecked] = useState(false);

  useEffect(()=>{
    setInputValue(value)
  }, [value])

  return (
    <div className="listItem">
      <Checkbox checked={checked} setChecked={setChecked} />
      
      <input 
        className="listItemName" 
        value={inputValue}
        onChange={(e)=> {
          setInputValue(e.target.value)
          updateItemValue(index, e.target.value)
        }} 
        style={checked? {textDecoration: "line-through"} : {textDecoration: "none"}}
      />

      <DeleteIcon
        className="deleteButton"
        onClick={()=>{
          console.log(`Button clicked for index: ${index}`);
          deleteItemFromList(index)
        }}
      />

    </div>
  )
}

export default ListItem;