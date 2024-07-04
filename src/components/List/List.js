import { useState } from "react";
import ListItem from "./ListItem";
import "./List.css"

function List() {

  const [items, setItems] = useState(["List item - click to edit"]);
  const [listName, setListName] = useState("List Name - Click to edit");

  const deleteItemFromList = (index)=>{
    console.log(`Deleting item at index: ${index}`);
    setItems((prevItems) => prevItems.filter((val, i) => i !== index));
  }

  const updateItemValue = (index, newValue) =>{
    setItems((prevItems) => prevItems.map( (value, i) => (i === index? newValue : value)))
  }

  return (
    <div className="list">
      <input className="listName" value={listName} onChange={e => setListName(e.target.value)}/>

      <div className="listItems">
        {
          items.map((val, index)=>
            <ListItem 
              key={index} 
              index={index} 
              value={val} 
              deleteItemFromList={deleteItemFromList}
              updateItemValue={updateItemValue}
            />
          )
        }
      </div>

      <button 
        className="addButton"
        onClick={()=>{
          setItems([...items, "List item - click to edit"]);
        }}
      > 
        Add Item
      </button>

    </div>
  )
}

export default List;