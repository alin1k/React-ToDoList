import List from "../List/List";
import "./NavBar.css"

function NavBar({setLists}) {
  return(
    <nav>
      <h1>To-Do List</h1>
      <ul>
        <li onClick={()=>{
          setLists((prevLists)=> [...prevLists, <List/>]) 
        }}>
          New List
        </li>
        <li>Save List</li>
        <li>My Lists</li>
      </ul>
    </nav>
  )
}

export default NavBar;