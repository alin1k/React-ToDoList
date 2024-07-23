import { addList } from "../../redux/lists/listsSlice";
import List from "../List/List";
import "./ListGrid.css"
import { useDispatch, useSelector } from "react-redux";
import ListContent from "./ListContent";

function ListGrid() {

  const lists = useSelector(state => state.lists)
  const dispatch = useDispatch();

  return(
    <div className="listGridContainer">
      <div className="listNamesContainer">
        <h2>Your Lists</h2>
        <div className="listNames">
          {lists.map((list, listIndex)=>
            <ListContent key={"list"+listIndex} list={list} listIndex={listIndex}/>
          )}
        </div>
      </div>

      {lists.length > 0?
        <div className="grid">
          {lists.map((list , index)=>
            <List 
              key={index} 
              index={index}
            />
          )}
        </div>
        :
        <div className="headerContainer">
          <h1 className="header">TO-DO LIST</h1>
          <p>
            <span className="addListLink" onClick={()=>{dispatch(addList())}}>Add a List </span>
            Now and Take Control of Your Tasks
          </p>
        </div>
      }
    </div>
  )
}

export default ListGrid;