import List from "../List/List";
import "./ListGrid.css"
import { useSelector } from "react-redux";

function ListGrid() {

  const lists = useSelector(state => state.lists)

  return(
    <div className="grid">
      {lists.length > 0?
        lists.map((list , index)=>
          <List 
            key={index} 
            index={index}
          />
        )
        :
        <p>Sorry You dont have any lists at the moment. Add a new list.</p>
      }
    </div>
  )
}

export default ListGrid;