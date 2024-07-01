import { useState } from "react";
import ListItem from "./ListItem";
import "./List.css"

function List() {

  const [items, setItems] = useState([]);
  const [listName, setListName] = useState("List Name - Click to edit");

  return (
    <div className="list">
      <input className="listName" value={listName} onChange={e => setListName(e.target.value)}/>

      <div className="listItems">
        {
          items.map((val, index)=>
            <ListItem index={index} value={val} />
          )
        }
      </div>
    
      <button onClick={()=>{
        setItems([...items, "Text"]);
      }}> 
        Add Item
      </button>

    </div>
  )
}

export default List;