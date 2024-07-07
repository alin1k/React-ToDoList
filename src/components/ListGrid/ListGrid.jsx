import List from "../List/List";
import "./ListGrid.css"
import { deleteList, updateListName } from "../../utils/listUtils";

function ListGrid({lists, setLists}) {

  return(
    <div className="grid">
      {lists.length > 0?
        lists.map((list , index)=>
          <List 
            key={index} 
            index={index} 
            name={list.name}
            listItems={list.items} 
            setLists={setLists}
            deleteList={(indedx) => deleteList(setLists, index)} 
            updateListName={(index, newValue) => updateListName(setLists, index, newValue)}
          />
        )
        :
        <p>Sorry You dont have any lists at the moment. Add a new list.</p>
      }
    </div>
  )
}

export default ListGrid;