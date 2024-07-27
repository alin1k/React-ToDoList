import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {


  return(
    <nav>
      <h1>To-Do List</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lists">My Lists</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;