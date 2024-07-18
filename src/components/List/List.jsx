import {useEffect, useRef, useState} from "react";
import ListItem from "./ListItem";
import "./List.css";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { addListItem, changeListName, deleteList } from "../../redux/lists/listsSlice.js";

function List({index: listIndex}) {

  const name = useSelector(state => state.lists[listIndex].name)
  const items = useSelector(state => state.lists[listIndex].items)
  const dispatch = useDispatch();

  const [listName, setListName] = useState(name);

  const nameInputRef = useRef(null);

  useEffect(()=>{
    setListName(name);
  }, [name]);

  return (
    <div className="list">
      <div className="listTop">
        <input 
          className="listName" 
          value={listName}
          ref={nameInputRef}
          onClick={()=>{ //select all text inside input box
            if(nameInputRef.current){
              nameInputRef.current.select();
            }
          }}
          onChange={e =>{ 
            setListName(e.target.value)
            dispatch(changeListName({index: listIndex, newName: e.target.value}))
          }}
        />
        <CloseIcon 
          className="closeListButton" 
          onClick={()=>dispatch(deleteList({index: listIndex}))}
        />
      </div>

      <div className="listItems">
        {
          items.map((item, index)=>
            <ListItem 
              key={index} 
              index={index} 
              listIndex={listIndex}
            />
          )
        }
      </div>

      <button 
        className="addButton"
        onClick={()=>{
          dispatch(addListItem({index: listIndex}));
        }}
      > 
        Add Item
      </button>

    </div>
  )
}

export default List;