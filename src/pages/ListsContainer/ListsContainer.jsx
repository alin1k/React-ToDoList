import { addList } from "../../redux/lists/listsSlice";
import List from "./List/List";
import "./ListsContainer.css"
import { useDispatch, useSelector } from "react-redux";
import ListContent from "./ListContent";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {ReactComponent as LaptopIlustration} from "../../assets/laptop-ilustration.svg"

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

          <button className="addListButton" onClick={()=>{
            dispatch(addList())
          }}>
            <AddCircleIcon className="addIcon"/>
            Add New List
          </button>
        </div>
        :
        <div className="headerContainer">
          <h1 className="header">MY TO-DO LISTS</h1>
          <p>
            <span className="addListLink" onClick={()=>{dispatch(addList())}}>Add a List </span>
            Now and Take Control of Your Tasks
          </p>
          <LaptopIlustration className="list-ilustration"/>
        </div>
      }
    </div>
  )
}

export default ListGrid;