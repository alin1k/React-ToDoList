import {useEffect, useState} from "react";
import ListItem from "./ListItem";
import "./List.css";
import CloseIcon from '@mui/icons-material/Close';

import{
 deleteItemFromList,
 updateItemValue,
 updateItemCheckedValue,
 moveItemUpInTheList,
 moveItemDownInTheList,
} from "../../utils/listUtils.js";

function List({index: listIndex, name, listItems, deleteList, updateListName, setLists}) {

  const [items, setItems] = useState(listItems);
  const [listName, setListName] = useState(name);

  useEffect(()=>{
    setListName(name);
  }, [name]);

  useEffect(()=>{
    setItems(listItems);
  }, [listItems]);

  // useEffect(()=>{ //checked items go to the back of the list, and new items get added before the first checked item
  //   setItems((prevItems)=>{
  //     const checkedItemsArray = [];

  //     prevItems = prevItems.filter((item, i)=>{
  //       if(item.checked === true){checkedItemsArray.push(item)}
  //       return item.checked === false;
  //     })

  //     return [...prevItems, ...checkedItemsArray];
  //   })
  // }, [items])

  return (
    <div className="list">
      <div className="listTop">
        <input 
          className="listName" 
          value={listName} 
          onChange={e =>{ 
            setListName(e.target.value)
            updateListName(listIndex, e.target.value)
          }}
        />
        <CloseIcon 
          className="closeListButton" 
          onClick={()=>deleteList(listIndex)}
        />
      </div>

      <div className="listItems">
        {
          items.map((item, index)=>
            <ListItem 
              key={index} 
              index={index} 
              item={item} 
              deleteItemFromList={(index) => deleteItemFromList(setItems, setLists, listIndex, index)}
              updateItemValue={(index, newValue) => updateItemValue(setItems, setLists, listIndex, index , newValue)}
              updateItemCheckedValue={(index, newValue) => updateItemCheckedValue(setItems, setLists, listIndex, index , newValue)}
              moveItemDownInTheList={(index) => moveItemDownInTheList(setItems, setLists, listIndex, index)}
              moveItemUpInTheList={(index) => moveItemUpInTheList(setItems, setLists, listIndex, index)}
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