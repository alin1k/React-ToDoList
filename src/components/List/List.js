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

  const moveItemUpInTheList = async (index)=>{
    if(index > 0){
      const movingItem = items[index];
      setItems((prevItems) => prevItems.filter((val, i) => i !== index));
      setItems((prevItems)=> prevItems.toSpliced(index-1, 0 , movingItem));
    }
  }

  const moveItemDownInTheList = (index)=>{
    if(index < items.length){
      const movingItem = items[index];
      setItems((prevItems) => prevItems.filter((val, i) => i !== index));
      setItems((prevItems)=> prevItems.toSpliced(index+1, 0 , movingItem));
    }
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
              moveItemDownInTheList={moveItemDownInTheList}
              moveItemUpInTheList={moveItemUpInTheList}
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