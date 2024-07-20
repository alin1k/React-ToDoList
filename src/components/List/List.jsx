import {useEffect, useState} from "react";
import ListItem from "./ListItem";
import "./List.css";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { addListItem, changeListName, deleteList } from "../../redux/lists/listsSlice.js";
import Swal from "sweetalert2";

function List({index: listIndex}) {

  const name = useSelector(state => state.lists[listIndex].name)
  const items = useSelector(state => state.lists[listIndex].items)
  const dispatch = useDispatch();

  const [listName, setListName] = useState(name);

  useEffect(()=>{
    setListName(name);
  }, [name]);

  return (
    <div className="list">
      <div className="listTop">
        <input 
          className="listName" 
          value={listName}
          placeholder="Type your list name here"
          onChange={e =>{ 
            setListName(e.target.value)
            dispatch(changeListName({index: listIndex, newName: e.target.value}))
          }}
        />
        <CloseIcon 
          className="closeListButton" 
          onClick={()=>{
            Swal.fire({
              title: "Are you sure?",
              text: "Your list will be deleted. You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#d33",
              cancelButtonColor: "#102C57",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                dispatch(deleteList({index: listIndex}))
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                  confirmButtonColor: "#102C57",
                });
              }
            });
          }}
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