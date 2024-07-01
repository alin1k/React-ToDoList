import { useState } from "react";

function ListItem({index, value}) {
  let [inputValue, setInputValue] = useState(value);

  return (
    <div className="listItem">
      <input type="checkbox"/>
      <input className="listItemName" value={inputValue} key={index} onChange={(e)=> setInputValue(e.target.value)} />
    </div>
  )
}

export default ListItem;