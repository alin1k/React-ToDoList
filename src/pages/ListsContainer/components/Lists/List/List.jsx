import ListItem from "./components/ListItem";
import ListTop from "./components/ListTop";
import "./List.css";
import { useDispatch, useSelector } from "react-redux";
import { addListItem } from "../../../../../redux/lists/listsSlice.js";

function List({index: listIndex}) {

  const items = useSelector(state => state.lists[listIndex].items)
  const dispatch = useDispatch();

  return (
    <div className="list">
      
      <ListTop listIndex={listIndex}/>

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