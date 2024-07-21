import { addList } from "../../redux/lists/listsSlice";
import List from "../List/List";
import "./ListGrid.css"
import { useDispatch, useSelector } from "react-redux";

function ListGrid() {

  const lists = useSelector(state => state.lists)
  const dispatch = useDispatch();

  return(
    <div className="listGridContainer">
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