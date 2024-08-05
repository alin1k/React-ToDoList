import "./ListsContainer.css"
import { useSelector } from "react-redux";
import NoLists from "./components/NoLists";
import Sidebar from "./components/Sidebar/Sidebar";
import Lists from "./components/Lists/Lists";

function ListGrid() {

  const lists = useSelector(state => state.lists);

  return(
    <div className="listGridContainer">
      <Sidebar lists={lists}/>

      {lists.length <= 0?
        <NoLists/>
        :
        <Lists lists={lists}/>
      }
    </div>
  )
}

export default ListGrid;