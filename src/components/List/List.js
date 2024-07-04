import { useState } from "react";
import ListItem from "./ListItem";
import "./List.css"

function List() {

  const [items, setItems] = useState([{text:"List item - click to edit", checked: false}]);
  const [listName, setListName] = useState("List Name - Click to edit");

  const deleteItemFromList = (index)=>{
    setItems((prevItems) => prevItems.filter((val, i) => i !== index));
  }

  const updateItemValue = (index, newValue) =>{
    setItems((prevItems) => prevItems.map( (item, i) => (i === index? {...item, text: newValue} : item)))
  }

  const updateItemCheckedValue = (index, newValue)=>{
    setItems((prevItems) => prevItems.map( (item, i) => (i === index? {...item, checked: newValue} : item)))
  }

  return (
    <div className="list">
      <input className="listName" value={listName} onChange={e => setListName(e.target.value)}/>

      <div className="listItems">
        {
          items.map((item, index)=>
            <ListItem 
              key={index} 
              index={index} 
              item={item} 
              deleteItemFromList={deleteItemFromList}
              updateItemValue={updateItemValue}
              updateItemCheckedValue={updateItemCheckedValue}
            />
          )
        }
      </div>

      <button 
        className="addButton"
        onClick={()=>{
          setItems([...items, {text:"List item - click to edit", checked: false}]);
        }}
      > 
        Add Item
      </button>

    </div>
  )
}

export default List;