import { useState } from "react";
import ListItem from "./ListItem";
import "./List.css"
import CloseIcon from '@mui/icons-material/Close';

import{
 deleteItemFromList,
 updateItemValue,
 updateItemCheckedValue,
 moveItemUpInTheList,
 moveItemDownInTheList
} from "../../utils/listUtils.js";

function List() {

  const [items, setItems] = useState([{text:"List item - click to edit", checked: false}]);
  const [listName, setListName] = useState("List Name - Click to edit");

  return (
    <div className="list">
      <div className="listTop">
        <input className="listName" value={listName} onChange={e => setListName(e.target.value)}/>
        <CloseIcon className="closeListButton" />
      </div>

      <div className="listItems">
        {
          items.map((item, index)=>
            <ListItem 
              key={index} 
              index={index} 
              item={item} 
              deleteItemFromList={(index) => deleteItemFromList(setItems, index)}
              updateItemValue={(index, newValue) => updateItemValue(setItems, index , newValue)}
              updateItemCheckedValue={(index, newValue) => updateItemCheckedValue(setItems, index , newValue)}
              moveItemDownInTheList={(index) => moveItemDownInTheList(setItems, index)}
              moveItemUpInTheList={(index) => moveItemUpInTheList(setItems, index)}
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