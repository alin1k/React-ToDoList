import { useDispatch } from "react-redux";
import "./NavBar.css"
import { addList } from "../../redux/lists/listsSlice";

function NavBar() {

  const disptch = useDispatch();

  return(
    <nav>
      <h1>To-Do List</h1>
      <ul>
        <li onClick={()=>{
           disptch(addList());
        }}>
          New List
        </li>
        <li>
          Save List
        </li>
        <li>My Lists</li>
      </ul>
    </nav>
  )
}

export default NavBar;