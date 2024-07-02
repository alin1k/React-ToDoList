import { useState } from "react";
import Checkbox from "./Checkbox/Checkbox";
import "./List.css"

function ListItem({index, value}) {
  const [inputValue, setInputValue] = useState(value);
  const [checked, setChecked] = useState(false);

  return (
    <div className="listItem">
      <Checkbox checked={checked} setChecked={setChecked} />
      <input 
        className="listItemName" 
        value={inputValue} 
        key={index} 
        onChange={(e)=> setInputValue(e.target.value)} 
        style={checked? {textDecoration: "line-through"} : {textDecoration: "none"}}
      />
    </div>
  )
}

export default ListItem;